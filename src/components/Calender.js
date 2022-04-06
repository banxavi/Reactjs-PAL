import React from 'react';
import { Calendar } from 'antd';

export default function Calendar_Form(value, mode) {
  console.log(value.format('YYYY-MM-DD'), mode);
  return(
      <div>
      <Calendar onPanelChange={Calendar_Form(1,2)} />
      </div>
  );
}
