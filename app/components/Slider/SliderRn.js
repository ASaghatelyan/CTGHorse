import {View, Text} from 'react-native';
import React, {useCallback, useState} from 'react';
import {styles} from './style';
import Slider from 'rn-range-slider';
import {Label, Notch, Thumb, Rail, RailSelected} from 'app/components/Slider';

export function SliderRn({
  lowCount,
  highCount,
  minCount,
  maxCount,
  title,
  type,
  step,
  info,
}) {
  const [rangeDisabled, setRangeDisabled] = useState(false);
  const [low, setLow] = useState(minCount);
  const [high, setHigh] = useState(maxCount);
  const [min, setMin] = useState(minCount);
  const [max, setMax] = useState(maxCount);

  const renderThumb = useCallback(name => <Thumb name={name} />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(
    value => <Label text={value} type={type} />,
    [],
  );
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((lowValue) => {
    lowCount(lowValue);  
    setLow(lowValue);
  }, []);
  return (
    <View style={{marginBottom: 24}}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.priceText}>
          {low} {type}
        </Text>
      </View>
      <Slider 
        disableRange
        min={min}
        max={max}
        step={step}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
      />
      <View style={styles.countView}>
        <Text style={styles.count}>
          {minCount} {info}
        </Text>
        <Text style={styles.count}>
          {maxCount} {info}
        </Text>
      </View>
    </View>
  );
}
