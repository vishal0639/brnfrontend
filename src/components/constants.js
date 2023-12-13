export const attendanceSummary={
    'Total Days':'723',
    'Working Days':'618',
    'Leaves':'0 days',
    'Absents':'606 days',
    'Days Attended':'12 days',
    'Updates Sent':'12 times',
    'Working Hours':'4944:00:00',
    'Worked Hours':'120:00:00',
    'Overall Spent Summary':'-4824:60:60',
    'Worked per Day (Avg.hrs)':'00:11:39',
    'Shortage Per Day (Avg.hrs)':'07:48:20',
    'Late to Office':'0 times',
    'Minimum Hrs missed':'0 times',
    'Max points':'18540',
    'Points Earned':'-17820',
    'Your Performance Score':'-96.1165%',
}

const dsaFormObj={
morning:['09-10am','10-11am','11-12am'],
afternoon:['12-01pm','01-02pm','02-03pm','03-04pm'],
evening:['04-05pm','05-06pm','06-Till you leave office']
}
  
export const dsaFormArray= Object.entries(dsaFormObj).flatMap(([key, values]) => values.map(value => [key, value]));
  
export const leaveObj={
  'Casual leave':'For attending any planned activity',
  'Sick leave':'For not Feeling well,Unable to come to office',
  'Emergency leave':'For any urgencies/emergencies',
}
  
export const states=["Andhra Pradesh","Arunachal Pradesh ","Assam","Bihar","Goa","Gujarat","Haryana",
"Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur"
,"Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu",
"Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
"Andaman and Nicobar Islands","Chandigarh","Dadra & Nagar Haveli and Daman & Diu Daman",
"New Delhi","Jammu and Kashmir","Jammu (Winter)","Lakshadweep","Puducherry","Ladakh"];

export const requestIDArr=['New Software Installation','Unable to login through my Username','Internet not working',
'Monitor Dispaly Problem','System Hangs Frequently','Audio Not working','OS Not Booting','Install XCode',
'Keyboard Not Working Properly','No KeyBoard','Mouse Not Working Properly','No Mouse','Dusty Mouse','Dusty Keyboard',
'Dusty Desk','Dusty Room','Cleaning Required For Bathroom','Liquid HandWash Required','Liquid DishWash Required'];





