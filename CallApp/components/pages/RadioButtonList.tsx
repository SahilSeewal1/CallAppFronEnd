import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from "../stylesheets/CustomerListCSS";

type RadioButtonListProps = {
  options: string[];
  selectedOption: string | null;
  onOptionSelect: (option: string | null) => void;
};

const RadioButtonList: React.FC<RadioButtonListProps> = ({
  options,
  selectedOption,
  onOptionSelect,
}) => {
  const handleOptionSelect = (option: string) => {
    if (selectedOption === option) {
      onOptionSelect(null); // Deselect the option if it's already selected
    } else {
      onOptionSelect(option); // Select the option
    }
  };

  const renderRadioButtons = () => {
    return options.map((item: string, index: number) => (
      <TouchableOpacity
        key={index}
        onPress={() => onOptionSelect(item)}
        style={style.radioButtonContainer}
      >
        <View
          style={[
            style.radioButton,
            selectedOption === item && style.radioButtonSelected,
          ]}
        >
          {selectedOption === item && <View style={style.radioButtonInner} />}
        </View>
        <Text style={style.radioButtonLabel}>{item}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={style.container2}>
      {renderRadioButtons()}
      <Text style={style.selectedItemText}>Selected item: {selectedOption}</Text>
    </View>
  );
};

export default RadioButtonList;