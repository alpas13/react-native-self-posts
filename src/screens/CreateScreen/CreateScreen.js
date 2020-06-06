import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useDispatch} from "react-redux";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../../components/AppHeaderIcon";
import {THEME} from "../../theme";
import {Operation} from "../../store/actions/post-action";
import {PhotoPicker} from "../../components/PhotoPicker";

export const CreateScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const addPostHandler = async () => {
    const post = {
      date: new Date().toJSON(),
      text: text,
      img: image,
      booked: 0
    };
    navigation.navigate('Main');
    await dispatch(Operation.addPost(post));
    setShowPicker(false);
    setText('');
  };

  const pickerHandler = (uri) => {
    setImage(uri);
    setShowPicker(true);
  };

  return (
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.center}>
            <TextInput style={styles.textArea} placeholder={'Describe your photo hear'} onChangeText={setText} value={text} multiline />
            <PhotoPicker showPicker={showPicker} onPick={pickerHandler}/>
            <Button style={styles.button} title={'Save post'} color={THEME.MAIN_COLOR} onPress={addPostHandler} disabled={!text}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
  );
};

CreateScreen.navigationOptions = ({navigation}) => ({
  headerTitle: 'Create post',
  headerLeft: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    <Item title="Menu" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}/>
  </HeaderButtons>
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    padding: 10,
  },
  textArea: {
    marginBottom: 10,
    padding: 10,
  },
  button: {
    marginTop: 10,
  }
});
