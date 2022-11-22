

import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icons from './constant/Icons';

const App = () => {
  
  return (
    <SafeAreaView>
      <View style={{alignItems: 'center'}}>
        {/* <Text style={{color: '#545454', fontSize: 16, fontWeight: '400'}}>
          89 Comment
        </Text> */}
      </View>

      <View style={{marginLeft: 25, marginTop: 30}}>
        <View>
          <Text style={{fontSize: 14, fontWeight: '300'}}>Hello,</Text>
          <Text style={{fontSize: 24, fontWeight: '500', marginTop: 10}}>
            Pratham
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            placeholder="Seach.."
            placeholderstyle={{marginLeft: 10}}
            style={{
              height: 50,
              width: 250,
              marginTop: 15,
              borderWidth: 0.2,
              borderRadius: 10,
              borderColor: 'white',
              shadowOffset: {width: 1, height: 1},
              shadowColor: 'black',
              shadowOpacity: 9.0,
              shadowRadius: 1,
            }}
          />
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: 'green',
              marginTop: 12,
              borderRadius: 10,
              marginLeft: 20,
              shadowOpacity: 2,
              shadowRadius: 1,
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Courses</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: '300'}}>See all</Text>
            <Image
              source={Icons.chevron}
              style={{marginLeft: 15, marginRight: 25, height: 15, width: 15}}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              height: 130,
              width: 110,
              backgroundColor: '#EFF5F5',
              borderRadius: 10,
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowRadius: 5,
              shadowOpacity: 1.0,
            }}>
            <Image source={Icons.Rectangle61} />
            <Text style={{fontSize: 18, fontWeight: '600', marginTop: 10}}>
              SSC
            </Text>
          </View>
          <View
            style={{
              height: 130,
              width: 110,
              backgroundColor: '#EFF5F5',
              borderRadius: 10,
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 20,
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowRadius: 5,
              shadowOpacity: 1.0,
            }}>
            <Image source={Icons.Rectangle61} />
            <Text style={{fontSize: 18, fontWeight: '600', marginTop: 10}}>
              UPSC
            </Text>
          </View>
          <View
            style={{
              height: 130,
              width: 110,
              backgroundColor: '#EFF5F5',
              borderRadius: 10,
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 20,
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowRadius: 5,
              shadowOpacity: 1.0,
            }}>
            <Image source={Icons.Rectangle61} />
            <Text style={{fontSize: 18, fontWeight: '600', marginTop: 10}}>
              SSC
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 40,
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>
            Recently Learned
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: '300'}}>See all</Text>
            <Image
              source={Icons.chevron}
              style={{marginLeft: 15, marginRight: 25, height: 15, width: 15}}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 50,
              width: 330,
              backgroundColor: '#EFF5F5',
              borderRadius: 15,
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowRadius: 5,
              shadowOpacity: 1.0,
            }}>
              <Image 
                style={{marginLeft: 10}}
                source={Icons.location}
              />
              <Text style={{marginLeft:30, fontSize: 18, fontWeight: '600'}}>Recent Notes</Text>
              <Image 
                style={{marginLeft: 120}}
                source={Icons.chevron}
              />
            </TouchableOpacity>

            <TouchableOpacity
            style={{
              marginTop: 30,
              flexDirection: 'row',
              alignItems: 'center',
              height: 50,
              width: 330,
              backgroundColor: '#EFF5F5',
              borderRadius: 15,
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowRadius: 5,
              shadowOpacity: 1.0,
            }}>
              <Image 
                style={{marginLeft: 10}}
                source={Icons.location}
              />
              <Text style={{marginLeft:30, fontSize: 18, fontWeight: '600'}}>Recent Test Series</Text>
              <Image 
                style={{marginLeft: 80}}
                source={Icons.chevron}
              />
            </TouchableOpacity>

            <TouchableOpacity
            style={{
              marginTop: 30,
              flexDirection: 'row',
              alignItems: 'center',
              height: 50,
              width: 330,
              backgroundColor: '#EFF5F5',
              borderRadius: 15,
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowRadius: 5,
              shadowOpacity: 1.0,
            }}>
              <Image 
                style={{marginLeft: 10}}
                source={Icons.location}
              />
              <Text style={{marginLeft:30, fontSize: 18, fontWeight: '600'}}>Recent Live Class</Text>
              <Image 
                style={{marginLeft: 90}}
                source={Icons.chevron}
              />
            </TouchableOpacity>
        </View>
      </View>

      {/* <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View> */}
    </SafeAreaView>
  );
};

export default App;
