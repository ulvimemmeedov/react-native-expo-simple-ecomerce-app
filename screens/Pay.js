import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { CreditCardInput } from "react-native-credit-card-input";
import { Button } from 'react-native-elements';
import AwesomeAlert from 'react-native-awesome-alerts';

function PayScreen() {
  const onChange = () => form => console.log(form);
  const [showAlertData, setShowAlert] = useState(false);
  const showAlert = () => {
    setShowAlert(true)
  };
  const hideAlert = () => {
    setShowAlert(false)
  };
  return (
    <View style={styles.col}>
      <View style={styles.col}>
        <CreditCardInput onChange={onChange} />
      </View>
      <View style={styles.col}>
      <View style={styles.row}>
        </View>
        <View>
          <Button onPress={showAlert} style={styles.btn} title='İndi Al' />
          <AwesomeAlert
          show={showAlertData}
          showProgress={true}
          title="Ödənişin Təsdiqi"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={true}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Ləgv et"
          confirmText="Ödəniş et"
          confirmButtonColor="#5cb85c"
          cancelButtonColor="#d9534f"
          onCancelPressed={() => {
            hideAlert();
          }}
          onConfirmPressed={() => {
            hideAlert();
          }}
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',

  },
  col: {
    flex: 1,
    flexDirection: 'column'
  },
});
export default PayScreen;