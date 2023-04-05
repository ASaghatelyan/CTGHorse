import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {styles} from './style';
import {Calendar} from 'react-native-calendars';
import moment from 'moment/moment';
import Left from 'app/assets/img/back.png';
import Right from 'app/assets/img/right.png';

export function CalendarModal(props) {
  const [data, setData] = useState('');

  return (
    <Modal isVisible={props.isVisible} onBackdropPress={props.onClose}>
      <View style={styles.content}>
        <Calendar
          initialDate={`${new Date()}`}
          renderHeader={date => {
            return (
              <View style={styles.CalendarTitle}>
                <TouchableOpacity onPress={props.onDateInfo}>
                  <Text style={styles.titleText}>
                    {' '}
                    {moment(date[0]).format('MMM YYYY')}
                  </Text>
                </TouchableOpacity>
                <Image source={Left} style={styles.arrowIc} />
              </View>
            );
          }}
          hideArrows={true}
          onDayPress={day => {
            props?.onNavi && props?.onNavi(day);
          }}
          // onDayLongPress={day => {
          // }}
          // monthFormat={'MMM YYYY'}
          // onMonthChange={month => {
          // }}
        //   renderArrow={direction =>
        //     direction === 'left' ? (
        //       <Image source={Left} style={styles.arrowIc} />
        //     ) : (
        //       <Image source={Right} style={styles.arrowIc} />
        //     )
        //   }
          // minDate={`${(moment(new Date()).format('DD MMM YYYY'))}`}
          firstDay={1}
          onPressArrowLeft={subtractMonth => subtractMonth()}
          onPressArrowRight={addMonth => addMonth()}
          disableAllTouchEventsForDisabledDays={true}
          enableSwipeMonths={true}
          theme={{
            'stylesheet.calendar.header': {
              dayHeader: {
                textAlign: 'center',
                fontSize: 12,
                color: '#FFEBCF',
                FontFace: {fontFamily: 'SFProText-Medium'},
              },
            },
            backgroundColor: 'red',
            calendarBackground: '#190C04',
            textSectionTitleColor: 'red',
            selectedDayBackgroundColor: 'red',
            // selectedDayTextColor:'red',
            todayTextColor: '#E9A13A',
            // todayBackgroundColor: 'red',
            dayTextColor: 'gray', //Disabled days
            dotColor: 'red',
            selectedDotColor: 'red',
            // monthTextColor:'red',
          }}
          style={{borderRadius: 10}}
        />
      </View>
    </Modal>
  );
}
