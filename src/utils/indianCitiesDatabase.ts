// Comprehensive Indian Cities Database
export interface IndianCity {
  id: string;
  name: string;
  state: string;
  district?: string;
  latitude: number;
  longitude: number;
  population: number;
  tier: 1 | 2 | 3 | 4; // City tier classification
  aliases: string[]; // Alternative names/spellings
  isCapital: boolean;
  isMetro: boolean;
  region: 'North' | 'South' | 'East' | 'West' | 'Central' | 'Northeast';
}

export const INDIAN_CITIES_DATABASE: IndianCity[] = [
  // Tier 1 Cities (Metro Cities)
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    district: 'Mumbai',
    latitude: 19.0760,
    longitude: 72.8777,
    population: 12442373,
    tier: 1,
    aliases: ['Bombay', 'Mumbai City'],
    isCapital: true,
    isMetro: true,
    region: 'West'
  },
  {
    id: 'delhi',
    name: 'New Delhi',
    state: 'Delhi',
    district: 'New Delhi',
    latitude: 28.6139,
    longitude: 77.2090,
    population: 16787941,
    tier: 1,
    aliases: ['Delhi', 'NCR', 'National Capital Territory'],
    isCapital: true,
    isMetro: true,
    region: 'North'
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    state: 'Karnataka',
    district: 'Bangalore Urban',
    latitude: 12.9716,
    longitude: 77.5946,
    population: 8443675,
    tier: 1,
    aliases: ['Bengaluru', 'Silicon City', 'Garden City'],
    isCapital: true,
    isMetro: true,
    region: 'South'
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    district: 'Hyderabad',
    latitude: 17.3850,
    longitude: 78.4867,
    population: 6809970,
    tier: 1,
    aliases: ['Cyberabad', 'City of Pearls'],
    isCapital: true,
    isMetro: true,
    region: 'South'
  },
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    state: 'Gujarat',
    district: 'Ahmedabad',
    latitude: 23.0225,
    longitude: 72.5714,
    population: 5570585,
    tier: 1,
    aliases: ['Amdavad'],
    isCapital: false,
    isMetro: true,
    region: 'West'
  },
  {
    id: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    district: 'Chennai',
    latitude: 13.0827,
    longitude: 80.2707,
    population: 4681087,
    tier: 1,
    aliases: ['Madras', 'Detroit of India'],
    isCapital: true,
    isMetro: true,
    region: 'South'
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    district: 'Kolkata',
    latitude: 22.5726,
    longitude: 88.3639,
    population: 4496694,
    tier: 1,
    aliases: ['Calcutta', 'City of Joy'],
    isCapital: true,
    isMetro: true,
    region: 'East'
  },
  {
    id: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    district: 'Pune',
    latitude: 18.5204,
    longitude: 73.8567,
    population: 3124458,
    tier: 1,
    aliases: ['Poona', 'Oxford of the East'],
    isCapital: false,
    isMetro: true,
    region: 'West'
  },

  // Tier 2 Cities (Major Cities)
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    district: 'Jaipur',
    latitude: 26.9124,
    longitude: 75.7873,
    population: 3046163,
    tier: 2,
    aliases: ['Pink City'],
    isCapital: true,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'surat',
    name: 'Surat',
    state: 'Gujarat',
    district: 'Surat',
    latitude: 21.1702,
    longitude: 72.8311,
    population: 4467797,
    tier: 2,
    aliases: ['Diamond City'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'lucknow',
    name: 'Lucknow',
    state: 'Uttar Pradesh',
    district: 'Lucknow',
    latitude: 26.8467,
    longitude: 80.9462,
    population: 2817105,
    tier: 2,
    aliases: ['City of Nawabs'],
    isCapital: true,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'kanpur',
    name: 'Kanpur',
    state: 'Uttar Pradesh',
    district: 'Kanpur Nagar',
    latitude: 26.4499,
    longitude: 80.3319,
    population: 2767031,
    tier: 2,
    aliases: ['Manchester of the East'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'nagpur',
    name: 'Nagpur',
    state: 'Maharashtra',
    district: 'Nagpur',
    latitude: 21.1458,
    longitude: 79.0882,
    population: 2405421,
    tier: 2,
    aliases: ['Orange City'],
    isCapital: false,
    isMetro: false,
    region: 'Central'
  },
  {
    id: 'indore',
    name: 'Indore',
    state: 'Madhya Pradesh',
    district: 'Indore',
    latitude: 22.7196,
    longitude: 75.8577,
    population: 1964086,
    tier: 2,
    aliases: ['Commercial Capital of MP'],
    isCapital: false,
    isMetro: false,
    region: 'Central'
  },
  {
    id: 'thane',
    name: 'Thane',
    state: 'Maharashtra',
    district: 'Thane',
    latitude: 19.2183,
    longitude: 72.9781,
    population: 1818872,
    tier: 2,
    aliases: ['City of Lakes'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'bhopal',
    name: 'Bhopal',
    state: 'Madhya Pradesh',
    district: 'Bhopal',
    latitude: 23.2599,
    longitude: 77.4126,
    population: 1798218,
    tier: 2,
    aliases: ['City of Lakes'],
    isCapital: true,
    isMetro: false,
    region: 'Central'
  },
  {
    id: 'visakhapatnam',
    name: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    district: 'Visakhapatnam',
    latitude: 17.6868,
    longitude: 83.2185,
    population: 1730320,
    tier: 2,
    aliases: ['Vizag', 'City of Destiny'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'pimpri-chinchwad',
    name: 'Pimpri-Chinchwad',
    state: 'Maharashtra',
    district: 'Pune',
    latitude: 18.6298,
    longitude: 73.7997,
    population: 1729359,
    tier: 2,
    aliases: ['PCMC'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'patna',
    name: 'Patna',
    state: 'Bihar',
    district: 'Patna',
    latitude: 25.5941,
    longitude: 85.1376,
    population: 1684222,
    tier: 2,
    aliases: ['Pataliputra'],
    isCapital: true,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'vadodara',
    name: 'Vadodara',
    state: 'Gujarat',
    district: 'Vadodara',
    latitude: 22.3072,
    longitude: 73.1812,
    population: 1666703,
    tier: 2,
    aliases: ['Baroda', 'Cultural Capital of Gujarat'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'ghaziabad',
    name: 'Ghaziabad',
    state: 'Uttar Pradesh',
    district: 'Ghaziabad',
    latitude: 28.6692,
    longitude: 77.4538,
    population: 1648643,
    tier: 2,
    aliases: ['Gateway of UP'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'ludhiana',
    name: 'Ludhiana',
    state: 'Punjab',
    district: 'Ludhiana',
    latitude: 30.9010,
    longitude: 75.8573,
    population: 1618879,
    tier: 2,
    aliases: ['Manchester of India'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'agra',
    name: 'Agra',
    state: 'Uttar Pradesh',
    district: 'Agra',
    latitude: 27.1767,
    longitude: 78.0081,
    population: 1585704,
    tier: 2,
    aliases: ['City of Taj'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'nashik',
    name: 'Nashik',
    state: 'Maharashtra',
    district: 'Nashik',
    latitude: 19.9975,
    longitude: 73.7898,
    population: 1486973,
    tier: 2,
    aliases: ['Wine Capital of India'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'faridabad',
    name: 'Faridabad',
    state: 'Haryana',
    district: 'Faridabad',
    latitude: 28.4089,
    longitude: 77.3178,
    population: 1414050,
    tier: 2,
    aliases: ['Industrial City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'meerut',
    name: 'Meerut',
    state: 'Uttar Pradesh',
    district: 'Meerut',
    latitude: 28.9845,
    longitude: 77.7064,
    population: 1309023,
    tier: 2,
    aliases: ['Sports City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'rajkot',
    name: 'Rajkot',
    state: 'Gujarat',
    district: 'Rajkot',
    latitude: 22.3039,
    longitude: 70.8022,
    population: 1286995,
    tier: 2,
    aliases: ['Rangilu Rajkot'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'kalyan-dombivli',
    name: 'Kalyan-Dombivli',
    state: 'Maharashtra',
    district: 'Thane',
    latitude: 19.2403,
    longitude: 73.1305,
    population: 1246381,
    tier: 2,
    aliases: ['Kalyan', 'Dombivli'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'vasai-virar',
    name: 'Vasai-Virar',
    state: 'Maharashtra',
    district: 'Palghar',
    latitude: 19.4914,
    longitude: 72.8054,
    population: 1221233,
    tier: 2,
    aliases: ['Vasai', 'Virar'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    district: 'Varanasi',
    latitude: 25.3176,
    longitude: 82.9739,
    population: 1201815,
    tier: 2,
    aliases: ['Banaras', 'Kashi', 'Spiritual Capital'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'srinagar',
    name: 'Srinagar',
    state: 'Jammu and Kashmir',
    district: 'Srinagar',
    latitude: 34.0837,
    longitude: 74.7973,
    population: 1180570,
    tier: 2,
    aliases: ['Paradise on Earth'],
    isCapital: true,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'aurangabad',
    name: 'Aurangabad',
    state: 'Maharashtra',
    district: 'Aurangabad',
    latitude: 19.8762,
    longitude: 75.3433,
    population: 1175116,
    tier: 2,
    aliases: ['City of Gates'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'dhanbad',
    name: 'Dhanbad',
    state: 'Jharkhand',
    district: 'Dhanbad',
    latitude: 23.7957,
    longitude: 86.4304,
    population: 1162472,
    tier: 2,
    aliases: ['Coal Capital of India'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'amritsar',
    name: 'Amritsar',
    state: 'Punjab',
    district: 'Amritsar',
    latitude: 31.6340,
    longitude: 74.8723,
    population: 1132761,
    tier: 2,
    aliases: ['Holy City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'navi-mumbai',
    name: 'Navi Mumbai',
    state: 'Maharashtra',
    district: 'Thane',
    latitude: 19.0330,
    longitude: 73.0297,
    population: 1119477,
    tier: 2,
    aliases: ['New Mumbai', 'Planned City'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'allahabad',
    name: 'Allahabad',
    state: 'Uttar Pradesh',
    district: 'Allahabad',
    latitude: 25.4358,
    longitude: 81.8463,
    population: 1117094,
    tier: 2,
    aliases: ['Prayagraj', 'Sangam City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'ranchi',
    name: 'Ranchi',
    state: 'Jharkhand',
    district: 'Ranchi',
    latitude: 23.3441,
    longitude: 85.3096,
    population: 1073440,
    tier: 2,
    aliases: ['City of Waterfalls'],
    isCapital: true,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'howrah',
    name: 'Howrah',
    state: 'West Bengal',
    district: 'Howrah',
    latitude: 22.5958,
    longitude: 88.2636,
    population: 1072161,
    tier: 2,
    aliases: ['Twin City of Kolkata'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'coimbatore',
    name: 'Coimbatore',
    state: 'Tamil Nadu',
    district: 'Coimbatore',
    latitude: 11.0168,
    longitude: 76.9558,
    population: 1061447,
    tier: 2,
    aliases: ['Manchester of South India'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'jabalpur',
    name: 'Jabalpur',
    state: 'Madhya Pradesh',
    district: 'Jabalpur',
    latitude: 23.1815,
    longitude: 79.9864,
    population: 1055525,
    tier: 2,
    aliases: ['Marble City'],
    isCapital: false,
    isMetro: false,
    region: 'Central'
  },
  {
    id: 'gwalior',
    name: 'Gwalior',
    state: 'Madhya Pradesh',
    district: 'Gwalior',
    latitude: 26.2183,
    longitude: 78.1828,
    population: 1054420,
    tier: 2,
    aliases: ['City of Music'],
    isCapital: false,
    isMetro: false,
    region: 'Central'
  },

  // Tier 3 Cities (Important Regional Centers)
  {
    id: 'vijayawada',
    name: 'Vijayawada',
    state: 'Andhra Pradesh',
    district: 'Krishna',
    latitude: 16.5062,
    longitude: 80.6480,
    population: 1048240,
    tier: 3,
    aliases: ['Bezawada'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'jodhpur',
    name: 'Jodhpur',
    state: 'Rajasthan',
    district: 'Jodhpur',
    latitude: 26.2389,
    longitude: 73.0243,
    population: 1033756,
    tier: 3,
    aliases: ['Blue City', 'Sun City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'madurai',
    name: 'Madurai',
    state: 'Tamil Nadu',
    district: 'Madurai',
    latitude: 9.9252,
    longitude: 78.1198,
    population: 1016885,
    tier: 3,
    aliases: ['Temple City', 'Athens of the East'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'raipur',
    name: 'Raipur',
    state: 'Chhattisgarh',
    district: 'Raipur',
    latitude: 21.2514,
    longitude: 81.6296,
    population: 1010087,
    tier: 3,
    aliases: ['Rice Bowl of India'],
    isCapital: true,
    isMetro: false,
    region: 'Central'
  },
  {
    id: 'kota',
    name: 'Kota',
    state: 'Rajasthan',
    district: 'Kota',
    latitude: 25.2138,
    longitude: 75.8648,
    population: 1001365,
    tier: 3,
    aliases: ['Education City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    state: 'Chandigarh',
    district: 'Chandigarh',
    latitude: 30.7333,
    longitude: 76.7794,
    population: 960787,
    tier: 3,
    aliases: ['City Beautiful', 'Planned City'],
    isCapital: true,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'guwahati',
    name: 'Guwahati',
    state: 'Assam',
    district: 'Kamrup Metropolitan',
    latitude: 26.1445,
    longitude: 91.7362,
    population: 957352,
    tier: 3,
    aliases: ['Gateway to Northeast'],
    isCapital: false,
    isMetro: false,
    region: 'Northeast'
  },
  {
    id: 'solapur',
    name: 'Solapur',
    state: 'Maharashtra',
    district: 'Solapur',
    latitude: 17.6599,
    longitude: 75.9064,
    population: 951118,
    tier: 3,
    aliases: ['Textile City'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'hubli-dharwad',
    name: 'Hubli-Dharwad',
    state: 'Karnataka',
    district: 'Dharwad',
    latitude: 15.3647,
    longitude: 75.1240,
    population: 943857,
    tier: 3,
    aliases: ['Hubli', 'Dharwad', 'Twin Cities'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'bareilly',
    name: 'Bareilly',
    state: 'Uttar Pradesh',
    district: 'Bareilly',
    latitude: 28.3670,
    longitude: 79.4304,
    population: 903668,
    tier: 3,
    aliases: ['Nath Nagari'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'mysore',
    name: 'Mysore',
    state: 'Karnataka',
    district: 'Mysuru',
    latitude: 12.2958,
    longitude: 76.6394,
    population: 887446,
    tier: 3,
    aliases: ['Mysuru', 'City of Palaces'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'tiruppur',
    name: 'Tiruppur',
    state: 'Tamil Nadu',
    district: 'Tiruppur',
    latitude: 11.1085,
    longitude: 77.3411,
    population: 877778,
    tier: 3,
    aliases: ['Knitwear Capital'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'moradabad',
    name: 'Moradabad',
    state: 'Uttar Pradesh',
    district: 'Moradabad',
    latitude: 28.8386,
    longitude: 78.7733,
    population: 889810,
    tier: 3,
    aliases: ['Brass City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'mangalore',
    name: 'Mangalore',
    state: 'Karnataka',
    district: 'Dakshina Kannada',
    latitude: 12.9141,
    longitude: 74.8560,
    population: 623841,
    tier: 3,
    aliases: ['Mangaluru', 'Rome of the East'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'thiruvananthapuram',
    name: 'Thiruvananthapuram',
    state: 'Kerala',
    district: 'Thiruvananthapuram',
    latitude: 8.5241,
    longitude: 76.9366,
    population: 957730,
    tier: 3,
    aliases: ['Trivandrum', 'Evergreen City'],
    isCapital: true,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'kochi',
    name: 'Kochi',
    state: 'Kerala',
    district: 'Ernakulam',
    latitude: 9.9312,
    longitude: 76.2673,
    population: 677381,
    tier: 3,
    aliases: ['Cochin', 'Queen of Arabian Sea'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'bhubaneswar',
    name: 'Bhubaneswar',
    state: 'Odisha',
    district: 'Khordha',
    latitude: 20.2961,
    longitude: 85.8245,
    population: 837737,
    tier: 3,
    aliases: ['Temple City of India'],
    isCapital: true,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'salem',
    name: 'Salem',
    state: 'Tamil Nadu',
    district: 'Salem',
    latitude: 11.6643,
    longitude: 78.1460,
    population: 831038,
    tier: 3,
    aliases: ['Steel City', 'Mango City'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'warangal',
    name: 'Warangal',
    state: 'Telangana',
    district: 'Warangal Urban',
    latitude: 17.9689,
    longitude: 79.5941,
    population: 811844,
    tier: 3,
    aliases: ['Orugallu'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'guntur',
    name: 'Guntur',
    state: 'Andhra Pradesh',
    district: 'Guntur',
    latitude: 16.3067,
    longitude: 80.4365,
    population: 743354,
    tier: 3,
    aliases: ['Chilli City'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'bhiwandi',
    name: 'Bhiwandi',
    state: 'Maharashtra',
    district: 'Thane',
    latitude: 19.3002,
    longitude: 73.0635,
    population: 709665,
    tier: 3,
    aliases: ['Textile City'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'saharanpur',
    name: 'Saharanpur',
    state: 'Uttar Pradesh',
    district: 'Saharanpur',
    latitude: 29.9680,
    longitude: 77.5552,
    population: 703345,
    tier: 3,
    aliases: ['Wood Carving City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'gorakhpur',
    name: 'Gorakhpur',
    state: 'Uttar Pradesh',
    district: 'Gorakhpur',
    latitude: 26.7606,
    longitude: 83.3732,
    population: 673446,
    tier: 3,
    aliases: ['City of Temples'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'bikaner',
    name: 'Bikaner',
    state: 'Rajasthan',
    district: 'Bikaner',
    latitude: 28.0229,
    longitude: 73.3119,
    population: 647804,
    tier: 3,
    aliases: ['Camel City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'amravati',
    name: 'Amravati',
    state: 'Maharashtra',
    district: 'Amravati',
    latitude: 20.9374,
    longitude: 77.7796,
    population: 647057,
    tier: 3,
    aliases: ['Cotton City'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'noida',
    name: 'Noida',
    state: 'Uttar Pradesh',
    district: 'Gautam Buddh Nagar',
    latitude: 28.5355,
    longitude: 77.3910,
    population: 642381,
    tier: 3,
    aliases: ['Planned City', 'IT Hub'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'jamshedpur',
    name: 'Jamshedpur',
    state: 'Jharkhand',
    district: 'East Singhbhum',
    latitude: 22.8046,
    longitude: 86.2029,
    population: 629659,
    tier: 3,
    aliases: ['Steel City', 'Pittsburgh of India'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'bhilai',
    name: 'Bhilai',
    state: 'Chhattisgarh',
    district: 'Durg',
    latitude: 21.1938,
    longitude: 81.3509,
    population: 625697,
    tier: 3,
    aliases: ['Steel City'],
    isCapital: false,
    isMetro: false,
    region: 'Central'
  },
  {
    id: 'cuttack',
    name: 'Cuttack',
    state: 'Odisha',
    district: 'Cuttack',
    latitude: 20.4625,
    longitude: 85.8828,
    population: 606007,
    tier: 3,
    aliases: ['Silver City', 'Millennium City'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'firozabad',
    name: 'Firozabad',
    state: 'Uttar Pradesh',
    district: 'Firozabad',
    latitude: 27.1592,
    longitude: 78.3957,
    population: 603797,
    tier: 3,
    aliases: ['Glass City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'kochi',
    name: 'Kochi',
    state: 'Kerala',
    district: 'Ernakulam',
    latitude: 9.9312,
    longitude: 76.2673,
    population: 677381,
    tier: 3,
    aliases: ['Cochin', 'Queen of Arabian Sea'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'bhavnagar',
    name: 'Bhavnagar',
    state: 'Gujarat',
    district: 'Bhavnagar',
    latitude: 21.7645,
    longitude: 72.1519,
    population: 593768,
    tier: 3,
    aliases: ['Cultural City of Saurashtra'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'dehradun',
    name: 'Dehradun',
    state: 'Uttarakhand',
    district: 'Dehradun',
    latitude: 30.3165,
    longitude: 78.0322,
    population: 578420,
    tier: 3,
    aliases: ['Doon Valley'],
    isCapital: true,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'durgapur',
    name: 'Durgapur',
    state: 'West Bengal',
    district: 'Paschim Bardhaman',
    latitude: 23.5204,
    longitude: 87.3119,
    population: 566517,
    tier: 3,
    aliases: ['Steel City of Eastern India'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'asansol',
    name: 'Asansol',
    state: 'West Bengal',
    district: 'Paschim Bardhaman',
    latitude: 23.6739,
    longitude: 86.9524,
    population: 563917,
    tier: 3,
    aliases: ['Coal Capital of India'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'nanded',
    name: 'Nanded',
    state: 'Maharashtra',
    district: 'Nanded',
    latitude: 19.1383,
    longitude: 77.3210,
    population: 550564,
    tier: 3,
    aliases: ['Sikh Pilgrimage Center'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'kolhapur',
    name: 'Kolhapur',
    state: 'Maharashtra',
    district: 'Kolhapur',
    latitude: 16.7050,
    longitude: 74.2433,
    population: 549236,
    tier: 3,
    aliases: ['City of Palaces'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'ajmer',
    name: 'Ajmer',
    state: 'Rajasthan',
    district: 'Ajmer',
    latitude: 26.4499,
    longitude: 74.6399,
    population: 542321,
    tier: 3,
    aliases: ['Heart of Rajasthan'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'akola',
    name: 'Akola',
    state: 'Maharashtra',
    district: 'Akola',
    latitude: 20.7002,
    longitude: 77.0082,
    population: 537149,
    tier: 3,
    aliases: ['Cotton City'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'gulbarga',
    name: 'Gulbarga',
    state: 'Karnataka',
    district: 'Kalaburagi',
    latitude: 17.3297,
    longitude: 76.8343,
    population: 532031,
    tier: 3,
    aliases: ['Kalaburagi'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'jamnagar',
    name: 'Jamnagar',
    state: 'Gujarat',
    district: 'Jamnagar',
    latitude: 22.4707,
    longitude: 70.0577,
    population: 529308,
    tier: 3,
    aliases: ['Jewel of Kathiawar'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'ujjain',
    name: 'Ujjain',
    state: 'Madhya Pradesh',
    district: 'Ujjain',
    latitude: 23.1765,
    longitude: 75.7885,
    population: 515215,
    tier: 3,
    aliases: ['City of Temples'],
    isCapital: false,
    isMetro: false,
    region: 'Central'
  },
  {
    id: 'loni',
    name: 'Loni',
    state: 'Uttar Pradesh',
    district: 'Ghaziabad',
    latitude: 28.7436,
    longitude: 77.2897,
    population: 512296,
    tier: 3,
    aliases: ['Industrial Town'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'siliguri',
    name: 'Siliguri',
    state: 'West Bengal',
    district: 'Darjeeling',
    latitude: 26.7271,
    longitude: 88.3953,
    population: 509709,
    tier: 3,
    aliases: ['Gateway to Northeast'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'jhansi',
    name: 'Jhansi',
    state: 'Uttar Pradesh',
    district: 'Jhansi',
    latitude: 25.4484,
    longitude: 78.5685,
    population: 507293,
    tier: 3,
    aliases: ['Gateway to Bundelkhand'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'ulhasnagar',
    name: 'Ulhasnagar',
    state: 'Maharashtra',
    district: 'Thane',
    latitude: 19.2215,
    longitude: 73.1645,
    population: 506937,
    tier: 3,
    aliases: ['Sindhi City'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'jammu',
    name: 'Jammu',
    state: 'Jammu and Kashmir',
    district: 'Jammu',
    latitude: 32.7266,
    longitude: 74.8570,
    population: 502197,
    tier: 3,
    aliases: ['City of Temples'],
    isCapital: true,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'sangli-miraj-kupwad',
    name: 'Sangli-Miraj-Kupwad',
    state: 'Maharashtra',
    district: 'Sangli',
    latitude: 16.8524,
    longitude: 74.5815,
    population: 502697,
    tier: 3,
    aliases: ['Sangli', 'Miraj', 'Kupwad'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'belgaum',
    name: 'Belgaum',
    state: 'Karnataka',
    district: 'Belagavi',
    latitude: 15.8497,
    longitude: 74.4977,
    population: 488292,
    tier: 3,
    aliases: ['Belagavi'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'mangalore',
    name: 'Mangalore',
    state: 'Karnataka',
    district: 'Dakshina Kannada',
    latitude: 12.9141,
    longitude: 74.8560,
    population: 484785,
    tier: 3,
    aliases: ['Mangaluru', 'Rome of the East'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'ambattur',
    name: 'Ambattur',
    state: 'Tamil Nadu',
    district: 'Chennai',
    latitude: 13.1143,
    longitude: 80.1548,
    population: 478134,
    tier: 3,
    aliases: ['Industrial Suburb'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'tirunelveli',
    name: 'Tirunelveli',
    state: 'Tamil Nadu',
    district: 'Tirunelveli',
    latitude: 8.7139,
    longitude: 77.7567,
    population: 474838,
    tier: 3,
    aliases: ['Rice Bowl of Tamil Nadu'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'malegaon',
    name: 'Malegaon',
    state: 'Maharashtra',
    district: 'Nashik',
    latitude: 20.5579,
    longitude: 74.5287,
    population: 471312,
    tier: 3,
    aliases: ['Textile City'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'gaya',
    name: 'Gaya',
    state: 'Bihar',
    district: 'Gaya',
    latitude: 24.7914,
    longitude: 85.0002,
    population: 470839,
    tier: 3,
    aliases: ['Holy City'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'jalgaon',
    name: 'Jalgaon',
    state: 'Maharashtra',
    district: 'Jalgaon',
    latitude: 21.0077,
    longitude: 75.5626,
    population: 460228,
    tier: 3,
    aliases: ['Banana City'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    state: 'Rajasthan',
    district: 'Udaipur',
    latitude: 24.5854,
    longitude: 73.7125,
    population: 451735,
    tier: 3,
    aliases: ['City of Lakes', 'Venice of the East'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'maheshtala',
    name: 'Maheshtala',
    state: 'West Bengal',
    district: 'South 24 Parganas',
    latitude: 22.5092,
    longitude: 88.2475,
    population: 449423,
    tier: 3,
    aliases: ['Suburban City'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  }
];

// AI-powered city search and matching functions
export class IndianCityAI {
  private static cities = INDIAN_CITIES_DATABASE;

  // Fuzzy search with AI-like matching
  static searchCities(query: string, limit: number = 10): IndianCity[] {
    if (!query || query.length < 2) return this.cities.slice(0, limit);

    const normalizedQuery = query.toLowerCase().trim();
    const results: { city: IndianCity; score: number }[] = [];

    this.cities.forEach(city => {
      let score = 0;

      // Exact name match (highest priority)
      if (city.name.toLowerCase() === normalizedQuery) {
        score += 100;
      }
      // Name starts with query
      else if (city.name.toLowerCase().startsWith(normalizedQuery)) {
        score += 80;
      }
      // Name contains query
      else if (city.name.toLowerCase().includes(normalizedQuery)) {
        score += 60;
      }

      // Check aliases
      city.aliases.forEach(alias => {
        if (alias.toLowerCase() === normalizedQuery) {
          score += 90;
        } else if (alias.toLowerCase().startsWith(normalizedQuery)) {
          score += 70;
        } else if (alias.toLowerCase().includes(normalizedQuery)) {
          score += 50;
        }
      });

      // State match
      if (city.state.toLowerCase().includes(normalizedQuery)) {
        score += 40;
      }

      // District match
      if (city.district?.toLowerCase().includes(normalizedQuery)) {
        score += 30;
      }

      // Boost score based on city importance
      if (city.tier === 1) score += 20;
      else if (city.tier === 2) score += 15;
      else if (city.tier === 3) score += 10;

      // Boost capital cities
      if (city.isCapital) score += 10;

      // Boost metro cities
      if (city.isMetro) score += 15;

      if (score > 0) {
        results.push({ city, score });
      }
    });

    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(result => result.city);
  }

  // Get cities by state
  static getCitiesByState(state: string): IndianCity[] {
    return this.cities.filter(city => 
      city.state.toLowerCase() === state.toLowerCase()
    ).sort((a, b) => b.population - a.population);
  }

  // Get cities by region
  static getCitiesByRegion(region: string): IndianCity[] {
    return this.cities.filter(city => 
      city.region.toLowerCase() === region.toLowerCase()
    ).sort((a, b) => b.population - a.population);
  }

  // Get cities by tier
  static getCitiesByTier(tier: 1 | 2 | 3 | 4): IndianCity[] {
    return this.cities.filter(city => city.tier === tier)
      .sort((a, b) => b.population - a.population);
  }

  // Get popular cities (top cities by population and importance)
  static getPopularCities(limit: number = 20): IndianCity[] {
    return this.cities
      .sort((a, b) => {
        // Sort by tier first, then by population
        if (a.tier !== b.tier) return a.tier - b.tier;
        return b.population - a.population;
      })
      .slice(0, limit);
  }

  // Get nearby cities (mock implementation - in real app, use actual distance calculation)
  static getNearbyCities(cityId: string, limit: number = 5): IndianCity[] {
    const city = this.cities.find(c => c.id === cityId);
    if (!city) return [];

    // Simple proximity based on state and region
    return this.cities
      .filter(c => c.id !== cityId && (c.state === city.state || c.region === city.region))
      .sort((a, b) => b.population - a.population)
      .slice(0, limit);
  }

  // Smart suggestions based on user input patterns
  static getSmartSuggestions(query: string): {
    cities: IndianCity[];
    suggestions: string[];
    categories: { [key: string]: IndianCity[] };
  } {
    const cities = this.searchCities(query, 8);
    const suggestions: string[] = [];
    const categories: { [key: string]: IndianCity[] } = {};

    // Generate contextual suggestions
    if (query.toLowerCase().includes('capital')) {
      categories['Capital Cities'] = this.cities.filter(c => c.isCapital).slice(0, 5);
      suggestions.push('Try searching for state capitals');
    }

    if (query.toLowerCase().includes('metro')) {
      categories['Metro Cities'] = this.cities.filter(c => c.isMetro).slice(0, 5);
      suggestions.push('Explore major metropolitan areas');
    }

    if (query.toLowerCase().includes('tech') || query.toLowerCase().includes('it')) {
      categories['Tech Hubs'] = this.cities.filter(c => 
        c.aliases.some(alias => alias.toLowerCase().includes('silicon')) ||
        ['bangalore', 'hyderabad', 'pune', 'chennai', 'noida'].includes(c.id)
      ).slice(0, 5);
      suggestions.push('Discover India\'s technology centers');
    }

    // Regional suggestions
    const regions = ['North', 'South', 'East', 'West', 'Central', 'Northeast'];
    regions.forEach(region => {
      if (query.toLowerCase().includes(region.toLowerCase())) {
        categories[`${region} India`] = this.getCitiesByRegion(region).slice(0, 5);
        suggestions.push(`Explore cities in ${region} India`);
      }
    });

    return { cities, suggestions, categories };
  }

  // Get city details with enhanced information
  static getCityDetails(cityId: string): IndianCity | null {
    return this.cities.find(city => city.id === cityId) || null;
  }

  // Calculate approximate distance between two cities (Haversine formula)
  static calculateDistance(city1Id: string, city2Id: string): number {
    const city1 = this.cities.find(c => c.id === city1Id);
    const city2 = this.cities.find(c => c.id === city2Id);
    
    if (!city1 || !city2) return 0;

    const R = 6371; // Earth's radius in kilometers
    const dLat = this.toRadians(city2.latitude - city1.latitude);
    const dLon = this.toRadians(city2.longitude - city1.longitude);
    
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.toRadians(city1.latitude)) * Math.cos(this.toRadians(city2.latitude)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  private static toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }
}

// Export commonly used city lists
export const METRO_CITIES = INDIAN_CITIES_DATABASE.filter(city => city.isMetro);
export const CAPITAL_CITIES = INDIAN_CITIES_DATABASE.filter(city => city.isCapital);
export const TIER_1_CITIES = INDIAN_CITIES_DATABASE.filter(city => city.tier === 1);
export const TIER_2_CITIES = INDIAN_CITIES_DATABASE.filter(city => city.tier === 2);
export const POPULAR_CITIES = IndianCityAI.getPopularCities(30);