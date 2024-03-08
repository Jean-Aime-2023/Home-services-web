import React from 'react'

const BookingHistoryList = ({bookingHistory}) => {
  return (
    <div>
        {bookingHistory.map((booking,index)=>(
            <div key={index}>
                {booking?.businessList?.name}
            </div>
        ))}
    </div>
  )
}

export default BookingHistoryList