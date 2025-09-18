import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const API = 'http://localhost:4000';

function Section({title, children}){
  return <View style={{padding:16, borderBottomWidth:1, borderColor:'#eee'}}>
    <Text style={{fontWeight:'800', fontSize:18, marginBottom:6}}>{title}</Text>
    {children}
  </View>
}

function HomeScreen(){
  return <ScrollView>
    <Section title="MorningBasket">
      <Text>Fresh fruits, dry fruits, combos & gift boxes.</Text>
    </Section>
    <Section title="Featured Packs">
      <Text>Daily, Weekly, Monthly subscriptions available.</Text>
    </Section>
  </ScrollView>
}

function BrowseScreen(){
  const [data,setData] = React.useState([])
  React.useEffect(()=>{ fetch(API+'/products').then(r=>r.json()).then(setData) },[])
  return <ScrollView>
    <Section title="Browse Products">
      {data.map(p => <Text key={p.id}>• {p.name} — ₹{p.price}</Text>)}
    </Section>
  </ScrollView>
}

function CartScreen(){ return <View style={{padding:16}}><Text>Cart (demo, server route /cart)</Text></View> }
function OrdersScreen(){ return <View style={{padding:16}}><Text>My Orders (server route /orders)</Text></View> }
function ProfileScreen(){ return <View style={{padding:16}}><Text>Profile & Support</Text></View> }

const Tab = createBottomTabNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Browse" component={BrowseScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
