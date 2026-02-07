/**
 * Figma Variable Fetcher
 *
 * This script fetches variable definitions from Figma and merges them with
 * the existing token extraction.
 *
 * REQUIREMENTS:
 * - Figma Personal Access Token with "Variables" scope (file_variables:read)
 *
 * HOW TO GET THE PROPER TOKEN:
 * 1. Go to https://www.figma.com/settings
 * 2. Scroll to "Personal access tokens"
 * 3. Click "Generate new token"
 * 4. Give it a name (e.g., "Design Tokens with Variables")
 * 5. Select these scopes:
 *    - File content (file_content:read) ✓
 *    - Variables (file_variables:read) ✓ <- IMPORTANT!
 * 6. Click "Generate token"
 * 7. Copy the token and save it securely
 * 8. Update the token in: "D:\DesignSystem Project Chadcn\Figma token.txt"
 * 9. Run this script: node fetch-variables-with-proper-token.js
 */

const fs = require('fs');
const https = require('https');

// Configuration
const FILE_KEY = 'CMvr69HUqITCOC2K7tIXIS';
const TOKEN_FILE = String.raw`D:\DesignSystem Project Chadcn\Figma token.txt`;
const OUTPUT_FILE = String.raw`D:\DesignSystem Project Chadcn\ai-design-system-starter\figma-tokens-with-variables.json`;
const EXISTING_TOKENS_FILE = String.raw`D:\DesignSystem Project Chadcn\ai-design-system-starter\figma-tokens-raw.json`;

// Read the token
let token;
try {
    token = fs.readFileSync(TOKEN_FILE, 'utf-8').trim().split('\n')[0].trim();
    console.log('Token loaded from file');
} catch (err) {
    console.error('Error reading token file:', err.message);
    console.error('Please ensure the token file exists at:', TOKEN_FILE);
    process.exit(1);
}

// Function to make HTTPS request
function fetchFromFigma(url) {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'X-Figma-Token': token
            }
        };

        https.get(url, options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                if (res.statusCode === 200) {
                    resolve(JSON.parse(data));
                } else {
                    reject({
                        statusCode: res.statusCode,
                        message: data
                    });
                }
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

async function main() {
    console.log('\n=== Figma Variable Extraction ===\n');
    console.log('File Key:', FILE_KEY);
    console.log('Fetching variables...\n');

    try {
        // Fetch variables
        const variablesUrl = `https://api.figma.com/v1/files/${FILE_KEY}/variables/local`;
        console.log('Requesting:', variablesUrl);

        const variableData = await fetchFromFigma(variablesUrl);

        console.log('\n✓ Variables fetched successfully!');
        console.log('  Variable Collections:', Object.keys(variableData.meta.variableCollections).length);
        console.log('  Variables:', Object.keys(variableData.meta.variables).length);

        // Load existing token data
        const existingTokens = JSON.parse(fs.readFileSync(EXISTING_TOKENS_FILE, 'utf-8'));

        // Process variables
        const variables = variableData.meta.variables;
        const collections = variableData.meta.variableCollections;

        // Organize variables by type and collection
        const organizedVariables = {
            colors: { primitives: {}, semantic: {}, other: {} },
            typography: {},
            spacing: {},
            borderRadius: {},
            borderWidth: {},
            effects: {},
            other: {},
            raw: { variables: {}, collections: {} }
        };

        // Process each variable
        for (const [varId, variable] of Object.entries(variables)) {
            const collection = collections[variable.variableCollectionId];
            const collectionName = collection?.name || 'unknown';

            // Get the first mode's value
            const modes = collection?.modes || [];
            const modeId = modes[0]?.modeId;
            const rawValue = variable.valuesByMode?.[modeId];

            // Resolve value (handle aliases)
            let resolvedValue = rawValue;
            let aliasChain = [];

            if (rawValue?.type === 'VARIABLE_ALIAS') {
                let currentId = rawValue.id;
                let depth = 0;
                while (currentId && depth < 10) {
                    const aliasedVar = variables[currentId];
                    if (!aliasedVar) break;

                    aliasChain.push(aliasedVar.name);
                    const aliasMode = collections[aliasedVar.variableCollectionId]?.modes[0]?.modeId;
                    resolvedValue = aliasedVar.valuesByMode?.[aliasMode];

                    if (resolvedValue?.type !== 'VARIABLE_ALIAS') break;
                    currentId = resolvedValue.id;
                    depth++;
                }
            }

            const varData = {
                id: varId,
                name: variable.name,
                type: variable.resolvedType,
                collection: collectionName,
                rawValue: rawValue,
                resolvedValue: resolvedValue,
                aliasChain: aliasChain.length > 0 ? aliasChain : null,
                description: variable.description || '',
                scopes: variable.scopes,
                hiddenFromPublishing: variable.hiddenFromPublishing
            };

            // Store in raw format
            organizedVariables.raw.variables[variable.name] = varData;

            // Categorize by type
            if (variable.resolvedType === 'COLOR') {
                if (collectionName.toLowerCase().includes('primitive') ||
                    variable.name.match(/^(red|blue|green|yellow|gray|grey|orange|purple|pink|cyan|teal|indigo|slate|zinc|neutral|stone|amber|lime|emerald|sky|violet|fuchsia|rose)-\d+$/i)) {
                    organizedVariables.colors.primitives[variable.name] = varData;
                } else if (collectionName.toLowerCase().includes('semantic') ||
                           variable.name.match(/^(background|foreground|primary|secondary|accent|destructive|muted|card|popover|border|input|ring)/i)) {
                    organizedVariables.colors.semantic[variable.name] = varData;
                } else {
                    organizedVariables.colors.other[variable.name] = varData;
                }
            } else if (variable.resolvedType === 'FLOAT') {
                if (variable.name.match(/spacing|padding|margin|gap|inset/i)) {
                    organizedVariables.spacing[variable.name] = varData;
                } else if (variable.name.match(/radius|rounded/i)) {
                    organizedVariables.borderRadius[variable.name] = varData;
                } else if (variable.name.match(/border|stroke|outline/i) && variable.name.match(/width|weight/i)) {
                    organizedVariables.borderWidth[variable.name] = varData;
                } else if (variable.name.match(/font-size|text-size/i)) {
                    organizedVariables.typography[variable.name] = varData;
                }
            } else if (variable.resolvedType === 'STRING') {
                if (variable.name.match(/font/i)) {
                    organizedVariables.typography[variable.name] = varData;
                }
            }
        }

        // Store collection metadata
        for (const [collId, collection] of Object.entries(collections)) {
            organizedVariables.raw.collections[collection.name] = {
                id: collId,
                name: collection.name,
                modes: collection.modes,
                defaultModeId: collection.defaultModeId,
                variableIds: collection.variableIds
            };
        }

        // Merge with existing token data
        const mergedTokens = {
            ...existingTokens,
            variables: organizedVariables,
            metadata: {
                ...existingTokens.metadata,
                variablesExtracted: true,
                variablesExtractedAt: new Date().toISOString()
            }
        };

        // Save the merged data
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(mergedTokens, null, 2), 'utf-8');

        console.log('\n✓ Complete token file saved!');
        console.log('  Output:', OUTPUT_FILE);
        console.log('\nVariable Breakdown:');
        console.log('  Color Primitives:', Object.keys(organizedVariables.colors.primitives).length);
        console.log('  Color Semantic:', Object.keys(organizedVariables.colors.semantic).length);
        console.log('  Color Other:', Object.keys(organizedVariables.colors.other).length);
        console.log('  Typography:', Object.keys(organizedVariables.typography).length);
        console.log('  Spacing:', Object.keys(organizedVariables.spacing).length);
        console.log('  Border Radius:', Object.keys(organizedVariables.borderRadius).length);
        console.log('  Border Width:', Object.keys(organizedVariables.borderWidth).length);
        console.log('  Collections:', Object.keys(organizedVariables.raw.collections).length);

    } catch (error) {
        console.error('\n✗ Error:', error.message);

        if (error.statusCode === 403) {
            console.error('\nThe token does not have the required scope.');
            console.error('Please follow these steps to get a proper token:\n');
            console.error('1. Go to https://www.figma.com/settings');
            console.error('2. Scroll to "Personal access tokens"');
            console.error('3. Click "Generate new token"');
            console.error('4. Select both scopes:');
            console.error('   - File content (file_content:read)');
            console.error('   - Variables (file_variables:read) <- REQUIRED!');
            console.error('5. Copy the new token to:', TOKEN_FILE);
            console.error('6. Run this script again\n');
        } else {
            console.error('Details:', error);
        }

        process.exit(1);
    }
}

main();
