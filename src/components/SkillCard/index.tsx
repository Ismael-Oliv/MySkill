import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface ISkillCard extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({skill, ...rest}: ISkillCard) {
  return (
    <TouchableOpacity style={styles.buttonSkills} {...rest}>
      <Text style={styles.textSkills}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkills: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkills: {
    fontSize: 22,

    fontWeight: 'bold',
    color: '#fff',
  },
});
