import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Calendar } from "@/components/ui/calendar"
import { Button } from '@/components/ui/button';


const BookingSection = ({ children }) => {
    const [date, setDate] = useState(new Date());
    const [timeSlot, setTimeSlot] = useState([]);
    const [selectedTime,setSelectedTime] = useState();
    useEffect(() => {
        getTime();
    }, [])
    const getTime = () => {
        const timeList = [];
        for (let i = 10; i <= 12; i++) {
            timeList.push({
                time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30 AM'
            })
        }
        for (let i = 1; i <= 6; i++) {
            timeList.push({
                time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30 PM'
            })
        }

        setTimeSlot(timeList)
    }
    return (
        <div>

            <Sheet>
                <SheetTrigger asChild>{children}</SheetTrigger>
                <SheetContent className='overflow-auto'>
                    <SheetHeader>
                        <SheetTitle>Book a service</SheetTitle>
                        <SheetDescription>
                            Select the data and time slot to book a service

                            {/* date pu=icker */}

                            <div className='flex flex-col gap-5 items-baseline'>
                                <h2 className='mt-5 font-bold'>Select Date</h2>
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-md border"
                                />




                              {/* timestamp 3:14:37 */}





                            </div>

                            {/* timeslot picker */}

                            <h2 className='my-5 font-bold'>Select Time slot</h2>
                            <div className='grid grid-cols-3 gap-3'>
                                {timeSlot.map((item, index) => (
                                    <Button key={index} variant='outline' onClick={()=>setSelectedTime(item.time)} className={`border rounded-full p-2 px-3 hover:text-white hover:bg-primary ${selectedTime==item.time&&'bg-primary text-white'}`}>
                                        {item.time}
                                    </Button>
                                ))}
                            </div>

                        </SheetDescription>
                    </SheetHeader>
                    <SheetFooter className='mt-5'>
                        <SheetClose asChild>
                        <div className='flex gap-5'>
                        <Button variant='destructive' type="submit" className="">Cancel</Button>
                            <Button disabled={!(selectedTime&&date)} type="submit">Book</Button>
                        </div>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default BookingSection