import { Text, StyleSheet } from 'react-native';

import Colors from '../../Constants/colors';

interface InstructionTextProps {
  children: any;
  style?: any
}

const InstructionText: React.FC<InstructionTextProps> = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
