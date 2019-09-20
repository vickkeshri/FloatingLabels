import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, SafeAreaView, KeyboardAvoidingView,Platform} from 'react-native';
import {TextInputLayout} from 'rn-textinputlayout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

 

export default class TextInputLayoutDemo extends Component {
 
    render() {
      const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0
        return (
            <SafeAreaView style={styles.container}>
              
               <KeyboardAwareScrollView >
              <TextInputLayout
                hintColor="red"
                style={styles.inputLayout}>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Email'}
                    returnKeyType="next"
                    onSubmitEditing={() => { this.second.focus(); }}
                    blurOnSubmit={false}
                />
              </TextInputLayout>
              <TextInputLayout hintColor="blue" style={styles.inputLayout}>
                <TextInput
                    ref={(input) => { this.second = input; }}
                    onSubmitEditing={() => { this.third.focus(); }}
                    style={styles.textInput}
                    returnKeyType="next"
                    placeholder={'Email'}
                />
              </TextInputLayout>
              <TextInputLayout hintColor="orange" style={styles.inputLayout}>
                <TextInput
                    ref={(input) => { this.third = input; }}
                    onSubmitEditing={() => { this.fourth.focus(); }}
                    style={styles.textInput}
                    placeholder={'Email'}
                    returnKeyType="next"
                />
              </TextInputLayout>
              <TextInputLayout hintColor="purple" style={styles.inputLayout}>
                <TextInput
                    ref={(input) => { this.fourth = input; }}
                    onSubmitEditing={() => { this.fifth.focus(); }}
                    style={styles.textInput}
                    placeholder={'Email'}
                    returnKeyType="next"
                />
              </TextInputLayout>
              <TextInputLayout style={styles.inputLayout}>
                <TextInput
                    ref={(input) => { this.fifth = input; }}
                    onSubmitEditing={() => { this.sixth.focus(); }}
                    style={styles.textInput}
                    placeholder={'Email'}
                    returnKeyType="next"
                />
              </TextInputLayout>
              <TextInputLayout style={styles.inputLayout}>
                <TextInput
                    ref={(input) => { this.sixth = input; }}
                    onSubmitEditing={() => { this.seven.focus(); }}
                    style={styles.textInput}
                    placeholder={'Email'}
                    returnKeyType="next"
                />
              </TextInputLayout>
              <TextInputLayout style={styles.inputLayout}>
                <TextInput
                    ref={(input) => { this.seven = input; }}
                    onSubmitEditing={() => { this.eight.focus(); }}
                    style={styles.textInput}
                    placeholder={'Email'}
                    returnKeyType="next"
                />
              </TextInputLayout>
              <TextInputLayout style={styles.inputLayout}>
                <TextInput
                    ref={(input) => { this.eight = input; }}
                    style={styles.textInput}
                    placeholder={'Email'}
                    returnKeyType="done"
                />
              </TextInputLayout>
              </KeyboardAwareScrollView>

            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center"
    },
    textInput: {
        fontSize: 16,
        height: 40
    },
    inputLayout: {
        marginTop: 8,
        marginHorizontal: 36,
       
    }
});