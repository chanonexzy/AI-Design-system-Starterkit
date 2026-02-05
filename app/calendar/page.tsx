'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar } from '@/components/ui/calendar'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ArrowRight, CalendarDays } from 'lucide-react'
import { type DateRange } from 'react-day-picker'

export default function CalendarShowcase() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([])
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>(undefined)
  const [withTimeDate, setWithTimeDate] = useState<Date | undefined>(new Date())

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Calendar</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            A date field component that allows users to select a date from a calendar.
          </p>
        </div>

        {/* Basic Calendar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Calendar</CardTitle>
            <CardDescription>
              Single date selection calendar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
            {date && (
              <p className="text-sm text-muted-foreground mt-4">
                Selected date: <span className="font-medium text-foreground">{date.toLocaleDateString()}</span>
              </p>
            )}
          </CardContent>
        </Card>

        {/* Date Range Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Date Range Selection</CardTitle>
            <CardDescription>
              Select a range of dates (from and to)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="range"
              selected={rangeDate}
              onSelect={setRangeDate}
              className="rounded-md border"
              numberOfMonths={2}
            />
            {rangeDate?.from && (
              <div className="text-sm text-muted-foreground mt-4 space-y-1">
                <p>
                  From: <span className="font-medium text-foreground">{rangeDate.from.toLocaleDateString()}</span>
                </p>
                {rangeDate.to && (
                  <p>
                    To: <span className="font-medium text-foreground">{rangeDate.to.toLocaleDateString()}</span>
                  </p>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Multiple Date Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multiple Date Selection</CardTitle>
            <CardDescription>
              Select multiple individual dates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="multiple"
              selected={multipleDate}
              onSelect={setMultipleDate}
              className="rounded-md border"
            />
            {multipleDate && multipleDate.length > 0 && (
              <div className="text-sm text-muted-foreground mt-4">
                <p className="font-medium text-foreground mb-2">Selected dates ({multipleDate.length}):</p>
                <div className="flex flex-wrap gap-2">
                  {multipleDate.map((d, i) => (
                    <Badge key={i} variant="secondary">
                      {d.toLocaleDateString()}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* With Dropdown */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Year and Month Dropdown</CardTitle>
            <CardDescription>
              Calendar with dropdowns for quick year/month navigation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              captionLayout="dropdown"
              fromYear={2020}
              toYear={2030}
            />
          </CardContent>
        </Card>

        {/* Disabled Dates */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Disabled Dates</CardTitle>
            <CardDescription>
              Calendar with certain dates disabled (e.g., weekends, past dates)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Disable Past Dates */}
            <div>
              <p className="text-sm font-medium mb-3">Disable Past Dates</p>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => date < new Date()}
              />
            </div>

            {/* Disable Weekends */}
            <div>
              <p className="text-sm font-medium mb-3">Disable Weekends</p>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => {
                  const day = date.getDay()
                  return day === 0 || day === 6
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Multiple Months */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multiple Months</CardTitle>
            <CardDescription>
              Display multiple months side by side
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              numberOfMonths={2}
            />
          </CardContent>
        </Card>

        {/* With Week Numbers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Week Numbers</CardTitle>
            <CardDescription>
              Display ISO week numbers alongside the calendar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              showWeekNumber
            />
          </CardContent>
        </Card>

        {/* Custom Footer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Custom Footer</CardTitle>
            <CardDescription>
              Calendar with action buttons in footer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
              />
              <div className="border-t p-3 flex justify-between items-center">
                <Button variant="ghost" size="sm" onClick={() => setDate(undefined)}>
                  Clear
                </Button>
                <Button size="sm" onClick={() => setDate(new Date())}>
                  Today
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compact Calendar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Compact Size</CardTitle>
            <CardDescription>
              Smaller calendar for constrained spaces
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border [--cell-size:2rem]"
            />
          </CardContent>
        </Card>

        {/* Booking Calendar Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Booking Calendar Example</CardTitle>
            <CardDescription>
              Calendar for booking/reservation systems
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border p-4">
              <div className="flex items-center gap-2 mb-4">
                <CalendarDays className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-semibold">Select Check-in and Check-out Dates</h3>
              </div>
              <Calendar
                mode="range"
                selected={rangeDate}
                onSelect={setRangeDate}
                disabled={(date) => date < new Date()}
                numberOfMonths={2}
              />
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    {rangeDate?.from && rangeDate?.to ? (
                      <>
                        <span className="font-medium">
                          {Math.ceil((rangeDate.to.getTime() - rangeDate.from.getTime()) / (1000 * 60 * 60 * 24))} nights
                        </span>
                        <span className="text-muted-foreground mx-2">•</span>
                        <span className="text-muted-foreground">
                          {rangeDate.from.toLocaleDateString()} - {rangeDate.to.toLocaleDateString()}
                        </span>
                      </>
                    ) : (
                      <span className="text-muted-foreground">Select dates to see pricing</span>
                    )}
                  </div>
                  <Button disabled={!rangeDate?.from || !rangeDate?.to}>
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calendar States */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Calendar States</CardTitle>
            <CardDescription>
              Different visual states of the calendar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-sm font-medium mb-3">Default State</p>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>

            <div>
              <p className="text-sm font-medium mb-3">With Selected Date</p>
              <Calendar
                mode="single"
                selected={new Date()}
                className="rounded-md border"
              />
            </div>

            <div>
              <p className="text-sm font-medium mb-3">With Date Range</p>
              <Calendar
                mode="range"
                selected={{
                  from: new Date(),
                  to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                }}
                className="rounded-md border"
              />
            </div>
          </CardContent>
        </Card>

        {/* Different Start of Week */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Start of Week</CardTitle>
            <CardDescription>
              Calendar starting on different days
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-sm font-medium mb-3">Start on Sunday (US)</p>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                weekStartsOn={0}
              />
            </div>

            <div>
              <p className="text-sm font-medium mb-3">Start on Monday (Europe)</p>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                weekStartsOn={1}
              />
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <Button asChild variant="outline">
            <a href="/">
              <ArrowLeft />
              Back to Home
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="/components">
              View All Components
              <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
