import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import { styles } from './style'
import { Calendar } from 'react-native-calendars'
import moment from 'moment/moment'
import Left from 'app/assets/img/leftC.png'
import Right from 'app/assets/img/rightC.png'

export function CalendarModal(props) {
    const [data, setData] = useState('')

    return (
        <Modal
            isVisible={props.isVisible}
            onBackdropPress={props.onClose}

        >

            <View style={styles.content}>
                <Calendar
                    initialDate={`${new Date()}`}
                    renderHeader={(date) => {
                        return (
                            <TouchableOpacity onPress={props.onDateInfo}>

                                <Text style={styles.titleText}> {moment(date[0]).format('MMM YYYY')}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    onDayPress={day => { props?.onNavi && props?.onNavi(day) }}
                    // onDayLongPress={day => { 
                    // }}
                    // monthFormat={'MMM YYYY'}
                    // onMonthChange={month => { 
                    // }}
                    renderArrow={direction => direction === 'left' ?
                        <Image source={Left} style={styles.arrowIc} /> :
                        <Image source={Right} style={styles.arrowIc} />
                    }
                    // minDate={`${(moment(new Date()).format('DD MMM YYYY'))}`}
                    firstDay={1}
                    onPressArrowLeft={subtractMonth => subtractMonth()}
                    onPressArrowRight={addMonth => addMonth()}
                    disableAllTouchEventsForDisabledDays={true}
                    enableSwipeMonths={true}
                    theme={{
                        "stylesheet.calendar.header": {
                            dayHeader: {
                                textAlign: 'center',
                                fontSize: 12,
                                color: "#EB1829",
                                FontFace: { fontFamily: "Roboto-Medium", }
                            },
                        },
                    }}
                    style={{ borderRadius: 10 }}
                />
            </View>

        </Modal>
    )
}