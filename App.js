import { StyleSheet, Text, ScrollView, Image, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.item}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }} 
          style={{ width: 80, height: 100 }} 
        />
        <Text>John Smith</Text>
        <Text>johnsmith@example.com</Text>
      </View>

      <View style={styles.item}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/women/75.jpg' }} 
          style={{ width: 80, height: 100 }} 
        />
        <Text>Jane Doe</Text>
        <Text>janedoe@example.com</Text>
      </View>

      <View style={styles.item}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/men/76.jpg' }} 
          style={{ width: 80, height: 100 }} 
        />
        <Text>Michael Johnson</Text>
        <Text>michaeljohnson@example.com</Text>
      </View>

      <View style={styles.item}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/women/76.jpg' }} 
          style={{ width: 80, height: 100 }} 
        />
        <Text>Emily Williams</Text>
        <Text>emilywilliams@example.com</Text>
      </View>

      <View style={styles.item}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/men/77.jpg' }} 
          style={{ width: 80, height: 100 }} 
        />
        <Text>William Brown</Text>
        <Text>williambrown@example.com</Text>
      </View>

      <View style={styles.item}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/women/77.jpg' }} 
          style={{ width: 80, height: 100 }} 
        />
        <Text>Olivia Jones</Text>
        <Text>oliviajones@example.com</Text>
      </View>

      <View style={styles.item}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/men/78.jpg' }} 
          style={{ width: 80, height: 100 }} 
        />
        <Text>James Miller</Text>
        <Text>jamesmiller@example.com</Text>
      </View>

      <View style={styles.item}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/women/78.jpg' }} 
          style={{ width: 80, height: 100 }} 
        />
        <Text>Sophia Davis</Text>
        <Text>sophiadavis@example.com</Text>
      </View>

      <View style={styles.item}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/men/79.jpg' }} 
          style={{ width: 80, height: 100 }} 
        />
        <Text>Ethan Garcia</Text>
        <Text>ethangarcia@example.com</Text>
      </View>

      <View style={styles.item}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/women/79.jpg' }} 
          style={{ width: 80, height: 100 }} 
        />
        <Text>Ava Rodriguez</Text>
        <Text>avarodriguez@example.com</Text>
      </View>

      <View style={styles.item}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/men/80.jpg' }} 
          style={{ width: 80, height: 100 }} 
        />
        <Text>David Wilson</Text>
        <Text>davidwilson@example.com</Text>
      </View>

      <View style={styles.item}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/women/80.jpg' }} 
          style={{ width: 80, height: 100 }} 
        />
        <Text>Sophia Taylor</Text>
        <Text>sophiataylor@example.com</Text>
      </View>

      <View style={styles.item}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/men/81.jpg' }} 
          style={{ width: 80, height: 100 }} 
        />
        <Text>Daniel Anderson</Text>
        <Text>danielanderson@example.com</Text>
      </View>

      <View style={styles.item}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/women/81.jpg' }} 
          style={{ width: 80, height: 100 }} 
        />
        <Text>Madison Lopez</Text>
        <Text>madisonlopez@example.com</Text>
      </View>

      <View style={styles.item}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/men/82.jpg' }} 
          style={{ width: 80, height: 100 }} 
        />
        <Text>Matthew Martinez</Text>
        <Text>matthewmartinez@example.com</Text>
      </View>

      <View style={styles.item}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/women/82.jpg' }} 
          style={{ width: 80, height: 100 }} 
        />
        <Text>Ava hernandez</Text>
        <Text>avahernandez@example.com</Text>
      </View>

      <View style={styles.item}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/men/83.jpg' }} 
          style={{ width: 80, height: 100 }} 
        />
        <Text>Joseph Brooks</Text>
        <Text>josephbrooksexample.com</Text>
      </View>

      <View style={styles.item}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/women/83.jpg' }} 
          style={{ width: 80, height: 100 }} 
        />
        <Text>Evelyn Perez</Text>
        <Text>evelynperez@example.com</Text>
      </View>

      <View style={styles.item}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/men/84.jpg' }} 
          style={{ width: 80, height: 100 }} 
        />
        <Text>Christopher Harris</Text>
        <Text>christopherharrtis@example.com</Text>
      </View>

      <View style={styles.item}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/women/84.jpg' }} 
          style={{ width: 80, height: 100 }} 
        />
        <Text>Abigail King</Text>
        <Text>abigailking@example.com</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  item: {
    alignItems: 'center',
    marginBottom: 20,
  },
});
