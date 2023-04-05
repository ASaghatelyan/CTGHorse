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
  const calendarRef = React.useRef()
  let _renderArrow = (direction) => {
    if(direction === 'left') {
        return log
    } else {
        return <Text>{this.state.nextMonth}</Text>
    }
}
  return (
    <Modal isVisible={props.isVisible} onBackdropPress={props.onClose}>
      <View style={styles.content}>
        <Calendar
        ref={calendarRef}
          initialDate={`${new Date()}`}
          renderHeader={date => {
            return (
              <View style={styles.calendarTitle}>
                <TouchableOpacity onPress={props.onDateInfo}>
                  <Text style={styles.titleText}>
                    {' '}
                    {moment(date[0]).format('MMM YYYY')}
                  </Text>
                </TouchableOpacity >
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <TouchableOpacity onPress={_renderArrow}>
                    <Image source={Left} style={styles.arrowIc} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={Right} style={styles.arrowIc} />
                  </TouchableOpacity>
                </View>
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
