import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';

import {Button} from '../../components/Button';
import {SkillCard} from '../../components/SkillCard';

interface ISkills {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState<ISkills[]>([]);
  const [grettings, setGreetings] = useState('');

  function hadleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setSkills([...skills, data]);
  }

  function handleRemoveSkill(id: string) {
    setSkills(prevState => prevState.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const currentHOur = new Date().getHours();

    if (currentHOur < 12) {
      setGreetings('Good Morning');
    } else if (currentHOur >= 12 && currentHOur < 18) {
      setGreetings('Good afternoon');
    } else {
      setGreetings('Good evening');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Ismael</Text>
      <Text style={styles.grettings}>{grettings}</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button title="Add" onPress={hadleAddNewSkill} />

      <Text style={[styles.title, {marginVertical: 50}]}>My skills</Text>
      <FlatList
        data={skills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: Platform.OS === 'ios' ? 70 : 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  grettings: {
    color: '#fff',
  },
});
