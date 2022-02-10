import { StyleSheet, SafeAreaView,Platform, StatusBar} from 'react-native';
import Balance from '../components/Home/Balance';
import Card from '../components/Home/Card';
import Info from '../components/Home/Info';
import BottomTabs from '../components/BottomTabs'
export default function Home() {

  return (
    
      <SafeAreaView style={styles.container}>
        <Balance balance="2,227"/>
        <Card/>
        <Info/>
        <BottomTabs/>
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container:{
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor:'white',
        flex:1,
    },
});
