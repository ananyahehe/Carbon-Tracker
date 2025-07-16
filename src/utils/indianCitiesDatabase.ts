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
  // ANDHRA PRADESH (Capital: Amaravati)
  {
    id: 'amaravati',
    name: 'Amaravati',
    state: 'Andhra Pradesh',
    district: 'Guntur',
    latitude: 16.5062,
    longitude: 80.6480,
    population: 103000,
    tier: 3,
    aliases: ['New Capital'],
    isCapital: true,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'visakhapatnam',
    name: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    district: 'Visakhapatnam',
    latitude: 17.6868,
    longitude: 83.2185,
    population: 2035922,
    tier: 2,
    aliases: ['Vizag', 'City of Destiny'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'vijayawada',
    name: 'Vijayawada',
    state: 'Andhra Pradesh',
    district: 'Krishna',
    latitude: 16.5062,
    longitude: 80.6480,
    population: 1048240,
    tier: 2,
    aliases: ['Bezawada'],
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
    id: 'nellore',
    name: 'Nellore',
    state: 'Andhra Pradesh',
    district: 'Nellore',
    latitude: 14.4426,
    longitude: 79.9865,
    population: 505258,
    tier: 3,
    aliases: ['Nelluru'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'kurnool',
    name: 'Kurnool',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    latitude: 15.8281,
    longitude: 78.0373,
    population: 484327,
    tier: 3,
    aliases: ['Gateway to Rayalaseema'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'rajahmundry',
    name: 'Rajahmundry',
    state: 'Andhra Pradesh',
    district: 'East Godavari',
    latitude: 17.0005,
    longitude: 81.8040,
    population: 341831,
    tier: 3,
    aliases: ['Rajamahendravaram', 'Cultural Capital of AP'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'kakinada',
    name: 'Kakinada',
    state: 'Andhra Pradesh',
    district: 'East Godavari',
    latitude: 16.9891,
    longitude: 82.2475,
    population: 443028,
    tier: 3,
    aliases: ['Cocanada'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'tirupati',
    name: 'Tirupati',
    state: 'Andhra Pradesh',
    district: 'Chittoor',
    latitude: 13.6288,
    longitude: 79.4192,
    population: 374260,
    tier: 3,
    aliases: ['Temple City'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'anantapur',
    name: 'Anantapur',
    state: 'Andhra Pradesh',
    district: 'Anantapur',
    latitude: 14.6819,
    longitude: 77.6006,
    population: 267161,
    tier: 4,
    aliases: ['Anantapuram'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },

  // ARUNACHAL PRADESH (Capital: Itanagar)
  {
    id: 'itanagar',
    name: 'Itanagar',
    state: 'Arunachal Pradesh',
    district: 'Papum Pare',
    latitude: 27.0844,
    longitude: 93.6053,
    population: 59490,
    tier: 4,
    aliases: ['Capital of Arunachal'],
    isCapital: true,
    isMetro: false,
    region: 'Northeast'
  },
  {
    id: 'naharlagun',
    name: 'Naharlagun',
    state: 'Arunachal Pradesh',
    district: 'Papum Pare',
    latitude: 27.1050,
    longitude: 93.6950,
    population: 30000,
    tier: 4,
    aliases: ['Twin City of Itanagar'],
    isCapital: false,
    isMetro: false,
    region: 'Northeast'
  },
  {
    id: 'pasighat',
    name: 'Pasighat',
    state: 'Arunachal Pradesh',
    district: 'East Siang',
    latitude: 28.0669,
    longitude: 95.3261,
    population: 25000,
    tier: 4,
    aliases: ['Oldest Town of Arunachal'],
    isCapital: false,
    isMetro: false,
    region: 'Northeast'
  },
  {
    id: 'tezpur',
    name: 'Tezpur',
    state: 'Arunachal Pradesh',
    district: 'Sonitpur',
    latitude: 26.6340,
    longitude: 92.7940,
    population: 58851,
    tier: 4,
    aliases: ['Cultural Capital'],
    isCapital: false,
    isMetro: false,
    region: 'Northeast'
  },

  // ASSAM (Capital: Dispur)
  {
    id: 'dispur',
    name: 'Dispur',
    state: 'Assam',
    district: 'Kamrup Metropolitan',
    latitude: 26.1433,
    longitude: 91.7898,
    population: 25000,
    tier: 4,
    aliases: ['Capital of Assam'],
    isCapital: true,
    isMetro: false,
    region: 'Northeast'
  },
  {
    id: 'guwahati',
    name: 'Guwahati',
    state: 'Assam',
    district: 'Kamrup Metropolitan',
    latitude: 26.1445,
    longitude: 91.7362,
    population: 957352,
    tier: 2,
    aliases: ['Gateway to Northeast', 'Pragjyotishpura'],
    isCapital: false,
    isMetro: false,
    region: 'Northeast'
  },
  {
    id: 'silchar',
    name: 'Silchar',
    state: 'Assam',
    district: 'Cachar',
    latitude: 24.8333,
    longitude: 92.7789,
    population: 228951,
    tier: 3,
    aliases: ['Island of Peace'],
    isCapital: false,
    isMetro: false,
    region: 'Northeast'
  },
  {
    id: 'dibrugarh',
    name: 'Dibrugarh',
    state: 'Assam',
    district: 'Dibrugarh',
    latitude: 27.4728,
    longitude: 94.9120,
    population: 154296,
    tier: 3,
    aliases: ['Tea City of India'],
    isCapital: false,
    isMetro: false,
    region: 'Northeast'
  },
  {
    id: 'jorhat',
    name: 'Jorhat',
    state: 'Assam',
    district: 'Jorhat',
    latitude: 26.7509,
    longitude: 94.2037,
    population: 153889,
    tier: 3,
    aliases: ['Cultural Capital of Assam'],
    isCapital: false,
    isMetro: false,
    region: 'Northeast'
  },
  {
    id: 'nagaon',
    name: 'Nagaon',
    state: 'Assam',
    district: 'Nagaon',
    latitude: 26.3467,
    longitude: 92.6806,
    population: 147231,
    tier: 3,
    aliases: ['Heart of Assam'],
    isCapital: false,
    isMetro: false,
    region: 'Northeast'
  },
  {
    id: 'tinsukia',
    name: 'Tinsukia',
    state: 'Assam',
    district: 'Tinsukia',
    latitude: 27.4900,
    longitude: 95.3597,
    population: 125455,
    tier: 4,
    aliases: ['Oil City'],
    isCapital: false,
    isMetro: false,
    region: 'Northeast'
  },

  // BIHAR (Capital: Patna)
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
    id: 'bhagalpur',
    name: 'Bhagalpur',
    state: 'Bihar',
    district: 'Bhagalpur',
    latitude: 25.2425,
    longitude: 86.9842,
    population: 410210,
    tier: 3,
    aliases: ['Silk City'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'muzaffarpur',
    name: 'Muzaffarpur',
    state: 'Bihar',
    district: 'Muzaffarpur',
    latitude: 26.1209,
    longitude: 85.3647,
    population: 393724,
    tier: 3,
    aliases: ['Litchi Kingdom'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'darbhanga',
    name: 'Darbhanga',
    state: 'Bihar',
    district: 'Darbhanga',
    latitude: 26.1542,
    longitude: 85.8918,
    population: 308873,
    tier: 3,
    aliases: ['Cultural Capital of Mithila'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'arrah',
    name: 'Arrah',
    state: 'Bihar',
    district: 'Bhojpur',
    latitude: 25.5564,
    longitude: 84.6628,
    population: 261099,
    tier: 4,
    aliases: ['Ara'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'begusarai',
    name: 'Begusarai',
    state: 'Bihar',
    district: 'Begusarai',
    latitude: 25.4182,
    longitude: 86.1272,
    population: 252008,
    tier: 4,
    aliases: ['Industrial Capital of Bihar'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'katihar',
    name: 'Katihar',
    state: 'Bihar',
    district: 'Katihar',
    latitude: 25.5394,
    longitude: 87.5761,
    population: 240565,
    tier: 4,
    aliases: ['Railway Junction'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'munger',
    name: 'Munger',
    state: 'Bihar',
    district: 'Munger',
    latitude: 25.3764,
    longitude: 86.4737,
    population: 213101,
    tier: 4,
    aliases: ['Monghyr'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'chhapra',
    name: 'Chhapra',
    state: 'Bihar',
    district: 'Saran',
    latitude: 25.7781,
    longitude: 84.7278,
    population: 201597,
    tier: 4,
    aliases: ['Chapra'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },

  // CHHATTISGARH (Capital: Raipur)
  {
    id: 'raipur',
    name: 'Raipur',
    state: 'Chhattisgarh',
    district: 'Raipur',
    latitude: 21.2514,
    longitude: 81.6296,
    population: 1010087,
    tier: 2,
    aliases: ['Rice Bowl of India'],
    isCapital: true,
    isMetro: false,
    region: 'Central'
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
    id: 'bilaspur-cg',
    name: 'Bilaspur',
    state: 'Chhattisgarh',
    district: 'Bilaspur',
    latitude: 22.0797,
    longitude: 82.1409,
    population: 365579,
    tier: 3,
    aliases: ['Railway Hub'],
    isCapital: false,
    isMetro: false,
    region: 'Central'
  },
  {
    id: 'korba',
    name: 'Korba',
    state: 'Chhattisgarh',
    district: 'Korba',
    latitude: 22.3595,
    longitude: 82.7501,
    population: 365073,
    tier: 3,
    aliases: ['Power Capital of India'],
    isCapital: false,
    isMetro: false,
    region: 'Central'
  },
  {
    id: 'durg',
    name: 'Durg',
    state: 'Chhattisgarh',
    district: 'Durg',
    latitude: 21.1901,
    longitude: 81.2849,
    population: 268806,
    tier: 3,
    aliases: ['Steel Hub'],
    isCapital: false,
    isMetro: false,
    region: 'Central'
  },
  {
    id: 'rajnandgaon',
    name: 'Rajnandgaon',
    state: 'Chhattisgarh',
    district: 'Rajnandgaon',
    latitude: 21.0974,
    longitude: 81.0379,
    population: 163122,
    tier: 4,
    aliases: ['Cultural City'],
    isCapital: false,
    isMetro: false,
    region: 'Central'
  },

  // GOA (Capital: Panaji)
  {
    id: 'panaji',
    name: 'Panaji',
    state: 'Goa',
    district: 'North Goa',
    latitude: 15.4909,
    longitude: 73.8278,
    population: 114405,
    tier: 4,
    aliases: ['Panjim'],
    isCapital: true,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'vasco-da-gama',
    name: 'Vasco da Gama',
    state: 'Goa',
    district: 'South Goa',
    latitude: 15.3960,
    longitude: 73.8157,
    population: 100031,
    tier: 4,
    aliases: ['Vasco'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'margao',
    name: 'Margao',
    state: 'Goa',
    district: 'South Goa',
    latitude: 15.2993,
    longitude: 74.1240,
    population: 78393,
    tier: 4,
    aliases: ['Madgaon', 'Commercial Capital of Goa'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'mapusa',
    name: 'Mapusa',
    state: 'Goa',
    district: 'North Goa',
    latitude: 15.5951,
    longitude: 73.8077,
    population: 40487,
    tier: 4,
    aliases: ['Market Town'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },

  // GUJARAT (Capital: Gandhinagar)
  {
    id: 'gandhinagar',
    name: 'Gandhinagar',
    state: 'Gujarat',
    district: 'Gandhinagar',
    latitude: 23.2156,
    longitude: 72.6369,
    population: 292797,
    tier: 3,
    aliases: ['Planned Capital'],
    isCapital: true,
    isMetro: false,
    region: 'West'
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
    aliases: ['Amdavad', 'Manchester of India'],
    isCapital: false,
    isMetro: true,
    region: 'West'
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
    aliases: ['Diamond City', 'Textile Hub'],
    isCapital: false,
    isMetro: false,
    region: 'West'
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
    id: 'junagadh',
    name: 'Junagadh',
    state: 'Gujarat',
    district: 'Junagadh',
    latitude: 21.5222,
    longitude: 70.4579,
    population: 319462,
    tier: 3,
    aliases: ['City of Girnar'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'nadiad',
    name: 'Nadiad',
    state: 'Gujarat',
    district: 'Kheda',
    latitude: 22.6939,
    longitude: 72.8618,
    population: 218095,
    tier: 4,
    aliases: ['Educational Hub'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'morbi',
    name: 'Morbi',
    state: 'Gujarat',
    district: 'Morbi',
    latitude: 22.8173,
    longitude: 70.8378,
    population: 210451,
    tier: 4,
    aliases: ['Ceramic City'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },

  // HARYANA (Capital: Chandigarh)
  {
    id: 'chandigarh-haryana',
    name: 'Chandigarh',
    state: 'Haryana',
    district: 'Chandigarh',
    latitude: 30.7333,
    longitude: 76.7794,
    population: 960787,
    tier: 2,
    aliases: ['City Beautiful', 'Planned City'],
    isCapital: true,
    isMetro: false,
    region: 'North'
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
    id: 'gurgaon',
    name: 'Gurgaon',
    state: 'Haryana',
    district: 'Gurgaon',
    latitude: 28.4595,
    longitude: 77.0266,
    population: 876969,
    tier: 2,
    aliases: ['Gurugram', 'Millennium City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'panipat',
    name: 'Panipat',
    state: 'Haryana',
    district: 'Panipat',
    latitude: 29.3909,
    longitude: 76.9635,
    population: 294292,
    tier: 3,
    aliases: ['Textile City', 'City of Weavers'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'ambala',
    name: 'Ambala',
    state: 'Haryana',
    district: 'Ambala',
    latitude: 30.3752,
    longitude: 76.7821,
    population: 207934,
    tier: 3,
    aliases: ['Scientific Instruments Hub'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'yamunanagar',
    name: 'Yamunanagar',
    state: 'Haryana',
    district: 'Yamunanagar',
    latitude: 30.1290,
    longitude: 77.2674,
    population: 383318,
    tier: 3,
    aliases: ['Plywood City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'rohtak',
    name: 'Rohtak',
    state: 'Haryana',
    district: 'Rohtak',
    latitude: 28.8955,
    longitude: 76.6066,
    population: 374292,
    tier: 3,
    aliases: ['Heart of Haryana'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'hisar',
    name: 'Hisar',
    state: 'Haryana',
    district: 'Hisar',
    latitude: 29.1492,
    longitude: 75.7217,
    population: 301249,
    tier: 3,
    aliases: ['Steel City of Haryana'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'karnal',
    name: 'Karnal',
    state: 'Haryana',
    district: 'Karnal',
    latitude: 29.6857,
    longitude: 76.9905,
    population: 302140,
    tier: 3,
    aliases: ['Rice Bowl of India'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'sonipat',
    name: 'Sonipat',
    state: 'Haryana',
    district: 'Sonipat',
    latitude: 28.9931,
    longitude: 77.0151,
    population: 279298,
    tier: 3,
    aliases: ['City of Gold'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },

  // HIMACHAL PRADESH (Capital: Shimla)
  {
    id: 'shimla',
    name: 'Shimla',
    state: 'Himachal Pradesh',
    district: 'Shimla',
    latitude: 31.1048,
    longitude: 77.1734,
    population: 169578,
    tier: 3,
    aliases: ['Queen of Hills', 'Summer Capital'],
    isCapital: true,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'dharamshala',
    name: 'Dharamshala',
    state: 'Himachal Pradesh',
    district: 'Kangra',
    latitude: 32.2190,
    longitude: 76.3234,
    population: 30764,
    tier: 4,
    aliases: ['Little Lhasa'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'manali',
    name: 'Manali',
    state: 'Himachal Pradesh',
    district: 'Kullu',
    latitude: 32.2432,
    longitude: 77.1892,
    population: 8096,
    tier: 4,
    aliases: ['Valley of Gods'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'kullu',
    name: 'Kullu',
    state: 'Himachal Pradesh',
    district: 'Kullu',
    latitude: 31.9576,
    longitude: 77.1094,
    population: 18306,
    tier: 4,
    aliases: ['Valley of Gods'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'solan',
    name: 'Solan',
    state: 'Himachal Pradesh',
    district: 'Solan',
    latitude: 30.9045,
    longitude: 77.0967,
    population: 58000,
    tier: 4,
    aliases: ['Mushroom City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'mandi-hp',
    name: 'Mandi',
    state: 'Himachal Pradesh',
    district: 'Mandi',
    latitude: 31.7084,
    longitude: 76.9319,
    population: 26422,
    tier: 4,
    aliases: ['Varanasi of Hills'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },

  // JHARKHAND (Capital: Ranchi)
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
    id: 'jamshedpur',
    name: 'Jamshedpur',
    state: 'Jharkhand',
    district: 'East Singhbhum',
    latitude: 22.8046,
    longitude: 86.2029,
    population: 629659,
    tier: 2,
    aliases: ['Steel City', 'Pittsburgh of India'],
    isCapital: false,
    isMetro: false,
    region: 'East'
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
    id: 'bokaro',
    name: 'Bokaro',
    state: 'Jharkhand',
    district: 'Bokaro',
    latitude: 23.6693,
    longitude: 86.1511,
    population: 473804,
    tier: 3,
    aliases: ['Steel City'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'deoghar',
    name: 'Deoghar',
    state: 'Jharkhand',
    district: 'Deoghar',
    latitude: 24.4823,
    longitude: 86.6961,
    population: 203116,
    tier: 4,
    aliases: ['Baidyanath Dham'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'hazaribagh',
    name: 'Hazaribagh',
    state: 'Jharkhand',
    district: 'Hazaribagh',
    latitude: 23.9929,
    longitude: 85.3594,
    population: 142460,
    tier: 4,
    aliases: ['Land of Thousand Gardens'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },

  // KARNATAKA (Capital: Bangalore)
  {
    id: 'bangalore',
    name: 'Bangalore',
    state: 'Karnataka',
    district: 'Bangalore Urban',
    latitude: 12.9716,
    longitude: 77.5946,
    population: 8443675,
    tier: 1,
    aliases: ['Bengaluru', 'Silicon Valley of India', 'Garden City'],
    isCapital: true,
    isMetro: true,
    region: 'South'
  },
  {
    id: 'mysore',
    name: 'Mysore',
    state: 'Karnataka',
    district: 'Mysuru',
    latitude: 12.2958,
    longitude: 76.6394,
    population: 887446,
    tier: 2,
    aliases: ['Mysuru', 'City of Palaces'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'hubli-dharwad',
    name: 'Hubli-Dharwad',
    state: 'Karnataka',
    district: 'Dharwad',
    latitude: 15.3647,
    longitude: 75.1240,
    population: 943857,
    tier: 2,
    aliases: ['Hubli', 'Dharwad', 'Twin Cities'],
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
    population: 623841,
    tier: 3,
    aliases: ['Mangaluru', 'Rome of the East'],
    isCapital: false,
    isMetro: false,
    region: 'South'
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
    id: 'davangere',
    name: 'Davangere',
    state: 'Karnataka',
    district: 'Davangere',
    latitude: 14.4644,
    longitude: 75.9218,
    population: 435128,
    tier: 3,
    aliases: ['Manchester of Karnataka'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'bellary',
    name: 'Bellary',
    state: 'Karnataka',
    district: 'Ballari',
    latitude: 15.1394,
    longitude: 76.9214,
    population: 410445,
    tier: 3,
    aliases: ['Ballari'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'bijapur-karnataka',
    name: 'Bijapur',
    state: 'Karnataka',
    district: 'Vijayapura',
    latitude: 16.8302,
    longitude: 75.7100,
    population: 327427,
    tier: 3,
    aliases: ['Vijayapura'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'shimoga',
    name: 'Shimoga',
    state: 'Karnataka',
    district: 'Shivamogga',
    latitude: 13.9299,
    longitude: 75.5681,
    population: 322650,
    tier: 3,
    aliases: ['Shivamogga'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },

  // KERALA (Capital: Thiruvananthapuram)
  {
    id: 'thiruvananthapuram',
    name: 'Thiruvananthapuram',
    state: 'Kerala',
    district: 'Thiruvananthapuram',
    latitude: 8.5241,
    longitude: 76.9366,
    population: 957730,
    tier: 2,
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
    tier: 2,
    aliases: ['Cochin', 'Queen of Arabian Sea'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'kozhikode',
    name: 'Kozhikode',
    state: 'Kerala',
    district: 'Kozhikode',
    latitude: 11.2588,
    longitude: 75.7804,
    population: 609224,
    tier: 3,
    aliases: ['Calicut', 'City of Spices'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'thrissur',
    name: 'Thrissur',
    state: 'Kerala',
    district: 'Thrissur',
    latitude: 10.5276,
    longitude: 76.2144,
    population: 315596,
    tier: 3,
    aliases: ['Cultural Capital of Kerala'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'kollam',
    name: 'Kollam',
    state: 'Kerala',
    district: 'Kollam',
    latitude: 8.8932,
    longitude: 76.6141,
    population: 397419,
    tier: 3,
    aliases: ['Quilon', 'Cashew Capital'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'alappuzha',
    name: 'Alappuzha',
    state: 'Kerala',
    district: 'Alappuzha',
    latitude: 9.4981,
    longitude: 76.3388,
    population: 174164,
    tier: 4,
    aliases: ['Alleppey', 'Venice of the East'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'palakkad',
    name: 'Palakkad',
    state: 'Kerala',
    district: 'Palakkad',
    latitude: 10.7867,
    longitude: 76.6548,
    population: 130955,
    tier: 4,
    aliases: ['Palghat', 'Gateway to Kerala'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'kannur',
    name: 'Kannur',
    state: 'Kerala',
    district: 'Kannur',
    latitude: 11.8745,
    longitude: 75.3704,
    population: 232486,
    tier: 4,
    aliases: ['Cannanore', 'Land of Looms'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'kottayam',
    name: 'Kottayam',
    state: 'Kerala',
    district: 'Kottayam',
    latitude: 9.5916,
    longitude: 76.5222,
    population: 136812,
    tier: 4,
    aliases: ['Land of Letters'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'malappuram',
    name: 'Malappuram',
    state: 'Kerala',
    district: 'Malappuram',
    latitude: 11.0510,
    longitude: 76.0711,
    population: 101386,
    tier: 4,
    aliases: ['Cultural Hub'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },

  // MADHYA PRADESH (Capital: Bhopal)
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
    id: 'sagar',
    name: 'Sagar',
    state: 'Madhya Pradesh',
    district: 'Sagar',
    latitude: 23.8388,
    longitude: 78.7378,
    population: 273357,
    tier: 3,
    aliases: ['Lake City'],
    isCapital: false,
    isMetro: false,
    region: 'Central'
  },
  {
    id: 'dewas',
    name: 'Dewas',
    state: 'Madhya Pradesh',
    district: 'Dewas',
    latitude: 22.9676,
    longitude: 76.0534,
    population: 289550,
    tier: 3,
    aliases: ['Industrial City'],
    isCapital: false,
    isMetro: false,
    region: 'Central'
  },
  {
    id: 'satna',
    name: 'Satna',
    state: 'Madhya Pradesh',
    district: 'Satna',
    latitude: 24.5854,
    longitude: 80.8322,
    population: 283004,
    tier: 3,
    aliases: ['Cement City'],
    isCapital: false,
    isMetro: false,
    region: 'Central'
  },
  {
    id: 'ratlam',
    name: 'Ratlam',
    state: 'Madhya Pradesh',
    district: 'Ratlam',
    latitude: 23.3315,
    longitude: 75.0367,
    population: 264810,
    tier: 3,
    aliases: ['Gold City'],
    isCapital: false,
    isMetro: false,
    region: 'Central'
  },
  {
    id: 'rewa',
    name: 'Rewa',
    state: 'Madhya Pradesh',
    district: 'Rewa',
    latitude: 24.5364,
    longitude: 81.2961,
    population: 235654,
    tier: 4,
    aliases: ['Land of White Tigers'],
    isCapital: false,
    isMetro: false,
    region: 'Central'
  },

  // MAHARASHTRA (Capital: Mumbai)
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    district: 'Mumbai',
    latitude: 19.0760,
    longitude: 72.8777,
    population: 12442373,
    tier: 1,
    aliases: ['Bombay', 'Financial Capital'],
    isCapital: true,
    isMetro: true,
    region: 'West'
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
    id: 'solapur',
    name: 'Solapur',
    state: 'Maharashtra',
    district: 'Solapur',
    latitude: 17.6599,
    longitude: 75.9064,
    population: 951118,
    tier: 2,
    aliases: ['Textile City'],
    isCapital: false,
    isMetro: false,
    region: 'West'
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

  // MANIPUR (Capital: Imphal)
  {
    id: 'imphal',
    name: 'Imphal',
    state: 'Manipur',
    district: 'Imphal West',
    latitude: 24.8170,
    longitude: 93.9368,
    population: 268243,
    tier: 4,
    aliases: ['Jewel of India'],
    isCapital: true,
    isMetro: false,
    region: 'Northeast'
  },
  {
    id: 'thoubal',
    name: 'Thoubal',
    state: 'Manipur',
    district: 'Thoubal',
    latitude: 24.6340,
    longitude: 93.9896,
    population: 35000,
    tier: 4,
    aliases: ['Rice Bowl'],
    isCapital: false,
    isMetro: false,
    region: 'Northeast'
  },

  // MEGHALAYA (Capital: Shillong)
  {
    id: 'shillong',
    name: 'Shillong',
    state: 'Meghalaya',
    district: 'East Khasi Hills',
    latitude: 25.5788,
    longitude: 91.8933,
    population: 143229,
    tier: 4,
    aliases: ['Scotland of the East'],
    isCapital: true,
    isMetro: false,
    region: 'Northeast'
  },
  {
    id: 'tura',
    name: 'Tura',
    state: 'Meghalaya',
    district: 'West Garo Hills',
    latitude: 25.5138,
    longitude: 90.2022,
    population: 65540,
    tier: 4,
    aliases: ['Land of Orange'],
    isCapital: false,
    isMetro: false,
    region: 'Northeast'
  },

  // MIZORAM (Capital: Aizawl)
  {
    id: 'aizawl',
    name: 'Aizawl',
    state: 'Mizoram',
    district: 'Aizawl',
    latitude: 23.7271,
    longitude: 92.7176,
    population: 293416,
    tier: 4,
    aliases: ['Land of Blue Mountains'],
    isCapital: true,
    isMetro: false,
    region: 'Northeast'
  },
  {
    id: 'lunglei',
    name: 'Lunglei',
    state: 'Mizoram',
    district: 'Lunglei',
    latitude: 22.8880,
    longitude: 92.7347,
    population: 57011,
    tier: 4,
    aliases: ['Bridge of Rock'],
    isCapital: false,
    isMetro: false,
    region: 'Northeast'
  },

  // NAGALAND (Capital: Kohima)
  {
    id: 'kohima',
    name: 'Kohima',
    state: 'Nagaland',
    district: 'Kohima',
    latitude: 25.6751,
    longitude: 94.1086,
    population: 99039,
    tier: 4,
    aliases: ['Land of Festivals'],
    isCapital: true,
    isMetro: false,
    region: 'Northeast'
  },
  {
    id: 'dimapur',
    name: 'Dimapur',
    state: 'Nagaland',
    district: 'Dimapur',
    latitude: 25.9044,
    longitude: 93.7267,
    population: 122834,
    tier: 4,
    aliases: ['Gateway to Nagaland'],
    isCapital: false,
    isMetro: false,
    region: 'Northeast'
  },

  // ODISHA (Capital: Bhubaneswar)
  {
    id: 'bhubaneswar',
    name: 'Bhubaneswar',
    state: 'Odisha',
    district: 'Khordha',
    latitude: 20.2961,
    longitude: 85.8245,
    population: 837737,
    tier: 2,
    aliases: ['Temple City of India'],
    isCapital: true,
    isMetro: false,
    region: 'East'
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
    id: 'rourkela',
    name: 'Rourkela',
    state: 'Odisha',
    district: 'Sundargarh',
    latitude: 22.2604,
    longitude: 84.8536,
    population: 483418,
    tier: 3,
    aliases: ['Steel City of Odisha'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'brahmapur',
    name: 'Brahmapur',
    state: 'Odisha',
    district: 'Ganjam',
    latitude: 19.3149,
    longitude: 84.7941,
    population: 355823,
    tier: 3,
    aliases: ['Berhampur', 'Silk City'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'sambalpur',
    name: 'Sambalpur',
    state: 'Odisha',
    district: 'Sambalpur',
    latitude: 21.4669,
    longitude: 83.9812,
    population: 335761,
    tier: 3,
    aliases: ['Diamond City'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'puri',
    name: 'Puri',
    state: 'Odisha',
    district: 'Puri',
    latitude: 19.8135,
    longitude: 85.8312,
    population: 200564,
    tier: 4,
    aliases: ['Jagannath Puri', 'Holy City'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },

  // PUNJAB (Capital: Chandigarh)
  {
    id: 'chandigarh-punjab',
    name: 'Chandigarh',
    state: 'Punjab',
    district: 'Chandigarh',
    latitude: 30.7333,
    longitude: 76.7794,
    population: 960787,
    tier: 2,
    aliases: ['City Beautiful', 'Planned City'],
    isCapital: true,
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
    id: 'amritsar',
    name: 'Amritsar',
    state: 'Punjab',
    district: 'Amritsar',
    latitude: 31.6340,
    longitude: 74.8723,
    population: 1132761,
    tier: 2,
    aliases: ['Holy City', 'Golden City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'jalandhar',
    name: 'Jalandhar',
    state: 'Punjab',
    district: 'Jalandhar',
    latitude: 31.3260,
    longitude: 75.5762,
    population: 873725,
    tier: 3,
    aliases: ['Sports City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'patiala',
    name: 'Patiala',
    state: 'Punjab',
    district: 'Patiala',
    latitude: 30.3398,
    longitude: 76.3869,
    population: 446246,
    tier: 3,
    aliases: ['Royal City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'bathinda',
    name: 'Bathinda',
    state: 'Punjab',
    district: 'Bathinda',
    latitude: 30.2110,
    longitude: 74.9455,
    population: 285813,
    tier: 3,
    aliases: ['City of Lakes'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'mohali',
    name: 'Mohali',
    state: 'Punjab',
    district: 'Mohali',
    latitude: 30.7046,
    longitude: 76.7179,
    population: 146213,
    tier: 3,
    aliases: ['Sahibzada Ajit Singh Nagar', 'IT City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'firozpur',
    name: 'Firozpur',
    state: 'Punjab',
    district: 'Firozpur',
    latitude: 30.9320,
    longitude: 74.6150,
    population: 110313,
    tier: 4,
    aliases: ['Border City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'hoshiarpur',
    name: 'Hoshiarpur',
    state: 'Punjab',
    district: 'Hoshiarpur',
    latitude: 31.5344,
    longitude: 75.9119,
    population: 168443,
    tier: 4,
    aliases: ['City of Saints'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'batala',
    name: 'Batala',
    state: 'Punjab',
    district: 'Gurdaspur',
    latitude: 31.8230,
    longitude: 75.2045,
    population: 158952,
    tier: 4,
    aliases: ['Guru Nanak City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },

  // RAJASTHAN (Capital: Jaipur)
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
    id: 'jodhpur',
    name: 'Jodhpur',
    state: 'Rajasthan',
    district: 'Jodhpur',
    latitude: 26.2389,
    longitude: 73.0243,
    population: 1033756,
    tier: 2,
    aliases: ['Blue City', 'Sun City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'kota',
    name: 'Kota',
    state: 'Rajasthan',
    district: 'Kota',
    latitude: 25.2138,
    longitude: 75.8648,
    population: 1001365,
    tier: 2,
    aliases: ['Education City'],
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
    id: 'bharatpur',
    name: 'Bharatpur',
    state: 'Rajasthan',
    district: 'Bharatpur',
    latitude: 27.2152,
    longitude: 77.4909,
    population: 252342,
    tier: 4,
    aliases: ['Eastern Gateway to Rajasthan'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'alwar',
    name: 'Alwar',
    state: 'Rajasthan',
    district: 'Alwar',
    latitude: 27.5530,
    longitude: 76.6346,
    population: 341422,
    tier: 3,
    aliases: ['Tiger Gate of Rajasthan'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'sikar',
    name: 'Sikar',
    state: 'Rajasthan',
    district: 'Sikar',
    latitude: 27.6094,
    longitude: 75.1399,
    population: 237579,
    tier: 4,
    aliases: ['Brass City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'pali',
    name: 'Pali',
    state: 'Rajasthan',
    district: 'Pali',
    latitude: 25.7711,
    longitude: 73.3234,
    population: 229956,
    tier: 4,
    aliases: ['Industrial City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },

  // SIKKIM (Capital: Gangtok)
  {
    id: 'gangtok',
    name: 'Gangtok',
    state: 'Sikkim',
    district: 'East Sikkim',
    latitude: 27.3389,
    longitude: 88.6065,
    population: 100286,
    tier: 4,
    aliases: ['Hill Station Capital'],
    isCapital: true,
    isMetro: false,
    region: 'Northeast'
  },
  {
    id: 'namchi',
    name: 'Namchi',
    state: 'Sikkim',
    district: 'South Sikkim',
    latitude: 27.1668,
    longitude: 88.3639,
    population: 12190,
    tier: 4,
    aliases: ['Sky High'],
    isCapital: false,
    isMetro: false,
    region: 'Northeast'
  },

  // TAMIL NADU (Capital: Chennai)
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
    id: 'madurai',
    name: 'Madurai',
    state: 'Tamil Nadu',
    district: 'Madurai',
    latitude: 9.9252,
    longitude: 78.1198,
    population: 1016885,
    tier: 2,
    aliases: ['Temple City', 'Athens of the East'],
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
    tier: 2,
    aliases: ['Knitwear Capital'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'salem',
    name: 'Salem',
    state: 'Tamil Nadu',
    district: 'Salem',
    latitude: 11.6643,
    longitude: 78.1460,
    population: 831038,
    tier: 2,
    aliases: ['Steel City', 'Mango City'],
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
    id: 'erode',
    name: 'Erode',
    state: 'Tamil Nadu',
    district: 'Erode',
    latitude: 11.3410,
    longitude: 77.7172,
    population: 498129,
    tier: 3,
    aliases: ['Textile Valley'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'vellore',
    name: 'Vellore',
    state: 'Tamil Nadu',
    district: 'Vellore',
    latitude: 12.9165,
    longitude: 79.1325,
    population: 423425,
    tier: 3,
    aliases: ['Fort City'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'thoothukudi',
    name: 'Thoothukudi',
    state: 'Tamil Nadu',
    district: 'Thoothukudi',
    latitude: 8.7642,
    longitude: 78.1348,
    population: 237251,
    tier: 4,
    aliases: ['Tuticorin', 'Pearl City'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'dindigul',
    name: 'Dindigul',
    state: 'Tamil Nadu',
    district: 'Dindigul',
    latitude: 10.3673,
    longitude: 77.9803,
    population: 207327,
    tier: 4,
    aliases: ['Lock City'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'thanjavur',
    name: 'Thanjavur',
    state: 'Tamil Nadu',
    district: 'Thanjavur',
    latitude: 10.7870,
    longitude: 79.1378,
    population: 222943,
    tier: 4,
    aliases: ['Tanjore', 'Rice Bowl'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },

  // TELANGANA (Capital: Hyderabad)
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
    id: 'warangal',
    name: 'Warangal',
    state: 'Telangana',
    district: 'Warangal Urban',
    latitude: 17.9689,
    longitude: 79.5941,
    population: 811844,
    tier: 2,
    aliases: ['Orugallu'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'nizamabad',
    name: 'Nizamabad',
    state: 'Telangana',
    district: 'Nizamabad',
    latitude: 18.6725,
    longitude: 78.0941,
    population: 311152,
    tier: 3,
    aliases: ['City of Nizams'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'khammam',
    name: 'Khammam',
    state: 'Telangana',
    district: 'Khammam',
    latitude: 17.2473,
    longitude: 80.1514,
    population: 262255,
    tier: 3,
    aliases: ['Coal Hub'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'karimnagar',
    name: 'Karimnagar',
    state: 'Telangana',
    district: 'Karimnagar',
    latitude: 18.4386,
    longitude: 79.1288,
    population: 261185,
    tier: 3,
    aliases: ['Granary of Telangana'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'ramagundam',
    name: 'Ramagundam',
    state: 'Telangana',
    district: 'Peddapalli',
    latitude: 18.7581,
    longitude: 79.4738,
    population: 242979,
    tier: 3,
    aliases: ['Fertilizer City'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },

  // TRIPURA (Capital: Agartala)
  {
    id: 'agartala',
    name: 'Agartala',
    state: 'Tripura',
    district: 'West Tripura',
    latitude: 23.8315,
    longitude: 91.2868,
    population: 400004,
    tier: 3,
    aliases: ['Royal Capital'],
    isCapital: true,
    isMetro: false,
    region: 'Northeast'
  },
  {
    id: 'dharmanagar',
    name: 'Dharmanagar',
    state: 'Tripura',
    district: 'North Tripura',
    latitude: 24.3667,
    longitude: 92.1667,
    population: 53000,
    tier: 4,
    aliases: ['Border Town'],
    isCapital: false,
    isMetro: false,
    region: 'Northeast'
  },

  // UTTAR PRADESH (Capital: Lucknow)
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
    id: 'bareilly',
    name: 'Bareilly',
    state: 'Uttar Pradesh',
    district: 'Bareilly',
    latitude: 28.3670,
    longitude: 79.4304,
    population: 903668,
    tier: 2,
    aliases: ['Nath Nagari'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'moradabad',
    name: 'Moradabad',
    state: 'Uttar Pradesh',
    district: 'Moradabad',
    latitude: 28.8386,
    longitude: 78.7733,
    population: 889810,
    tier: 2,
    aliases: ['Brass City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
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
    id: 'noida',
    name: 'Noida',
    state: 'Uttar Pradesh',
    district: 'Gautam Buddh Nagar',
    latitude: 28.5355,
    longitude: 77.3910,
    population: 642381,
    tier: 2,
    aliases: ['Planned City', 'IT Hub'],
    isCapital: false,
    isMetro: false,
    region: 'North'
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
    id: 'aligarh',
    name: 'Aligarh',
    state: 'Uttar Pradesh',
    district: 'Aligarh',
    latitude: 27.8974,
    longitude: 78.0880,
    population: 874408,
    tier: 3,
    aliases: ['Lock City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'mathura',
    name: 'Mathura',
    state: 'Uttar Pradesh',
    district: 'Mathura',
    latitude: 27.4924,
    longitude: 77.6737,
    population: 441894,
    tier: 3,
    aliases: ['Birthplace of Krishna'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },

  // UTTARAKHAND (Capital: Dehradun)
  {
    id: 'dehradun',
    name: 'Dehradun',
    state: 'Uttarakhand',
    district: 'Dehradun',
    latitude: 30.3165,
    longitude: 78.0322,
    population: 578420,
    tier: 2,
    aliases: ['Doon Valley'],
    isCapital: true,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'haridwar',
    name: 'Haridwar',
    state: 'Uttarakhand',
    district: 'Haridwar',
    latitude: 29.9457,
    longitude: 78.1642,
    population: 228832,
    tier: 3,
    aliases: ['Gateway to God'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'roorkee',
    name: 'Roorkee',
    state: 'Uttarakhand',
    district: 'Haridwar',
    latitude: 29.8543,
    longitude: 77.8880,
    population: 118473,
    tier: 4,
    aliases: ['Engineering Hub'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'haldwani',
    name: 'Haldwani',
    state: 'Uttarakhand',
    district: 'Nainital',
    latitude: 29.2183,
    longitude: 79.5130,
    population: 156078,
    tier: 4,
    aliases: ['Gateway to Kumaon'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'rudrapur',
    name: 'Rudrapur',
    state: 'Uttarakhand',
    district: 'Udham Singh Nagar',
    latitude: 28.9845,
    longitude: 79.4077,
    population: 140857,
    tier: 4,
    aliases: ['Industrial City'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'kashipur',
    name: 'Kashipur',
    state: 'Uttarakhand',
    district: 'Udham Singh Nagar',
    latitude: 29.2155,
    longitude: 78.9565,
    population: 121623,
    tier: 4,
    aliases: ['Industrial Hub'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },

  // WEST BENGAL (Capital: Kolkata)
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
  },
  {
    id: 'rajpur-sonarpur',
    name: 'Rajpur Sonarpur',
    state: 'West Bengal',
    district: 'South 24 Parganas',
    latitude: 22.4497,
    longitude: 88.4050,
    population: 425036,
    tier: 3,
    aliases: ['Suburban Municipality'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'kharagpur',
    name: 'Kharagpur',
    state: 'West Bengal',
    district: 'Paschim Medinipur',
    latitude: 22.3460,
    longitude: 87.2320,
    population: 293719,
    tier: 3,
    aliases: ['Railway Hub'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'haldia',
    name: 'Haldia',
    state: 'West Bengal',
    district: 'Purba Medinipur',
    latitude: 22.0583,
    longitude: 88.0597,
    population: 200762,
    tier: 4,
    aliases: ['Port City'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },
  {
    id: 'krishnanagar',
    name: 'Krishnanagar',
    state: 'West Bengal',
    district: 'Nadia',
    latitude: 23.4058,
    longitude: 88.5019,
    population: 153062,
    tier: 4,
    aliases: ['Clay City'],
    isCapital: false,
    isMetro: false,
    region: 'East'
  },

  // UNION TERRITORIES

  // ANDAMAN AND NICOBAR ISLANDS (Capital: Port Blair)
  {
    id: 'port-blair',
    name: 'Port Blair',
    state: 'Andaman and Nicobar Islands',
    district: 'South Andaman',
    latitude: 11.6234,
    longitude: 92.7265,
    population: 100186,
    tier: 4,
    aliases: ['Island Capital'],
    isCapital: true,
    isMetro: false,
    region: 'South'
  },

  // CHANDIGARH (Capital: Chandigarh)
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    state: 'Chandigarh',
    district: 'Chandigarh',
    latitude: 30.7333,
    longitude: 76.7794,
    population: 960787,
    tier: 2,
    aliases: ['City Beautiful', 'Planned City'],
    isCapital: true,
    isMetro: false,
    region: 'North'
  },

  // DADRA AND NAGAR HAVELI AND DAMAN AND DIU (Capital: Daman)
  {
    id: 'daman',
    name: 'Daman',
    state: 'Dadra and Nagar Haveli and Daman and Diu',
    district: 'Daman',
    latitude: 20.3974,
    longitude: 72.8328,
    population: 44282,
    tier: 4,
    aliases: ['Portuguese Heritage City'],
    isCapital: true,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'diu',
    name: 'Diu',
    state: 'Dadra and Nagar Haveli and Daman and Diu',
    district: 'Diu',
    latitude: 20.7144,
    longitude: 70.9876,
    population: 23991,
    tier: 4,
    aliases: ['Island City'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },
  {
    id: 'silvassa',
    name: 'Silvassa',
    state: 'Dadra and Nagar Haveli and Daman and Diu',
    district: 'Dadra and Nagar Haveli',
    latitude: 20.2738,
    longitude: 73.0140,
    population: 98032,
    tier: 4,
    aliases: ['Tribal Capital'],
    isCapital: false,
    isMetro: false,
    region: 'West'
  },

  // DELHI (Capital: New Delhi)
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

  // JAMMU AND KASHMIR (Capital: Srinagar (Summer), Jammu (Winter))
  {
    id: 'srinagar',
    name: 'Srinagar',
    state: 'Jammu and Kashmir',
    district: 'Srinagar',
    latitude: 34.0837,
    longitude: 74.7973,
    population: 1180570,
    tier: 2,
    aliases: ['Paradise on Earth', 'Summer Capital'],
    isCapital: true,
    isMetro: false,
    region: 'North'
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
    aliases: ['City of Temples', 'Winter Capital'],
    isCapital: true,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'anantnag',
    name: 'Anantnag',
    state: 'Jammu and Kashmir',
    district: 'Anantnag',
    latitude: 33.7311,
    longitude: 75.1480,
    population: 108505,
    tier: 4,
    aliases: ['Islamabad'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'baramulla',
    name: 'Baramulla',
    state: 'Jammu and Kashmir',
    district: 'Baramulla',
    latitude: 34.2097,
    longitude: 74.3436,
    population: 71434,
    tier: 4,
    aliases: ['Gateway to Kashmir'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },

  // LADAKH (Capital: Leh)
  {
    id: 'leh',
    name: 'Leh',
    state: 'Ladakh',
    district: 'Leh',
    latitude: 34.1526,
    longitude: 77.5770,
    population: 30870,
    tier: 4,
    aliases: ['Land of High Passes'],
    isCapital: true,
    isMetro: false,
    region: 'North'
  },
  {
    id: 'kargil',
    name: 'Kargil',
    state: 'Ladakh',
    district: 'Kargil',
    latitude: 34.5539,
    longitude: 76.1313,
    population: 16338,
    tier: 4,
    aliases: ['Gateway to Ladakh'],
    isCapital: false,
    isMetro: false,
    region: 'North'
  },

  // LAKSHADWEEP (Capital: Kavaratti)
  {
    id: 'kavaratti',
    name: 'Kavaratti',
    state: 'Lakshadweep',
    district: 'Lakshadweep',
    latitude: 10.5669,
    longitude: 72.6420,
    population: 11210,
    tier: 4,
    aliases: ['Island Capital'],
    isCapital: true,
    isMetro: false,
    region: 'South'
  },

  // PUDUCHERRY (Capital: Puducherry)
  {
    id: 'puducherry',
    name: 'Puducherry',
    state: 'Puducherry',
    district: 'Puducherry',
    latitude: 11.9416,
    longitude: 79.8083,
    population: 244377,
    tier: 4,
    aliases: ['Pondicherry', 'French Riviera of the East'],
    isCapital: true,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'karaikal',
    name: 'Karaikal',
    state: 'Puducherry',
    district: 'Karaikal',
    latitude: 10.9254,
    longitude: 79.8380,
    population: 86838,
    tier: 4,
    aliases: ['Port Town'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'yanam',
    name: 'Yanam',
    state: 'Puducherry',
    district: 'Yanam',
    latitude: 16.7333,
    longitude: 82.2167,
    population: 32000,
    tier: 4,
    aliases: ['French Enclave'],
    isCapital: false,
    isMetro: false,
    region: 'South'
  },
  {
    id: 'mahe',
    name: 'Mahe',
    state: 'Puducherry',
    district: 'Mahe',
    latitude: 11.7001,
    longitude: 75.5350,
    population: 41816,
    tier: 4,
    aliases: ['Coastal Enclave'],
    isCapital: false,
    isMetro: false,
    region: 'South'
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
  static getPopularCities(limit: number = 50): IndianCity[] {
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
      categories['Capital Cities'] = this.cities.filter(c => c.isCapital).slice(0, 10);
      suggestions.push('Try searching for state capitals');
    }

    if (query.toLowerCase().includes('metro')) {
      categories['Metro Cities'] = this.cities.filter(c => c.isMetro).slice(0, 8);
      suggestions.push('Explore major metropolitan areas');
    }

    if (query.toLowerCase().includes('tech') || query.toLowerCase().includes('it')) {
      categories['Tech Hubs'] = this.cities.filter(c => 
        c.aliases.some(alias => alias.toLowerCase().includes('silicon')) ||
        ['bangalore', 'hyderabad', 'pune', 'chennai', 'noida', 'gurgaon'].includes(c.id)
      ).slice(0, 8);
      suggestions.push('Discover India\'s technology centers');
    }

    // Regional suggestions
    const regions = ['North', 'South', 'East', 'West', 'Central', 'Northeast'];
    regions.forEach(region => {
      if (query.toLowerCase().includes(region.toLowerCase())) {
        categories[`${region} India`] = this.getCitiesByRegion(region).slice(0, 8);
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

  // Get all states and union territories
  static getAllStatesAndUTs(): { states: string[]; unionTerritories: string[] } {
    const states = [
      'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
      'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
      'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
      'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
      'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
    ];

    const unionTerritories = [
      'Andaman and Nicobar Islands', 'Chandigarh', 
      'Dadra and Nagar Haveli and Daman and Diu', 'Delhi',
      'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
    ];

    return { states, unionTerritories };
  }

  // Get statistics
  static getStatistics(): {
    totalCities: number;
    stateCount: number;
    utCount: number;
    tierDistribution: { [key: number]: number };
    regionDistribution: { [key: string]: number };
  } {
    const { states, unionTerritories } = this.getAllStatesAndUTs();
    
    const tierDistribution = { 1: 0, 2: 0, 3: 0, 4: 0 };
    const regionDistribution: { [key: string]: number } = {};

    this.cities.forEach(city => {
      tierDistribution[city.tier]++;
      regionDistribution[city.region] = (regionDistribution[city.region] || 0) + 1;
    });

    return {
      totalCities: this.cities.length,
      stateCount: states.length,
      utCount: unionTerritories.length,
      tierDistribution,
      regionDistribution
    };
  }
}

// Export commonly used city lists
export const METRO_CITIES = INDIAN_CITIES_DATABASE.filter(city => city.isMetro);
export const CAPITAL_CITIES = INDIAN_CITIES_DATABASE.filter(city => city.isCapital);
export const TIER_1_CITIES = INDIAN_CITIES_DATABASE.filter(city => city.tier === 1);
export const TIER_2_CITIES = INDIAN_CITIES_DATABASE.filter(city => city.tier === 2);
export const POPULAR_CITIES = IndianCityAI.getPopularCities(50);

// Export statistics
export const INDIA_STATS = IndianCityAI.getStatistics();