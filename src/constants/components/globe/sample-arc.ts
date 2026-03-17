import { COLORS } from './colors'

const rc = () => COLORS[Math.floor(Math.random() * COLORS.length)]

export const SAMPLE_ARCS = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: rc()
  },
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: rc()
  },
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -1.303396,
    endLng: 36.852443,
    arcAlt: 0.5,
    color: rc()
  },
  {
    order: 2,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: rc()
  },
  {
    order: 2,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 2,
    startLat: -15.785493,
    startLng: -47.909029,
    endLat: 36.162809,
    endLng: -115.119411,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 3,
    startLat: 21.3099,
    startLng: -157.8581,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 3,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 4,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.5,
    color: rc()
  },
  {
    order: 4,
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.7,
    color: rc()
  },
  {
    order: 4,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.1,
    color: rc()
  },
  {
    order: 5,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 5,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.2,
    color: rc()
  },
  {
    order: 5,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.2,
    color: rc()
  },
  {
    order: 6,
    startLat: -15.432563,
    startLng: 28.315853,
    endLat: 1.094136,
    endLng: -63.34546,
    arcAlt: 0.7,
    color: rc()
  },
  {
    order: 6,
    startLat: 37.5665,
    startLng: 126.978,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.1,
    color: rc()
  },
  {
    order: 6,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 7,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.1,
    color: rc()
  },
  {
    order: 7,
    startLat: 48.8566,
    startLng: -2.3522,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.1,
    color: rc()
  },
  {
    order: 7,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: rc()
  },
  {
    order: 8,
    startLat: -8.833221,
    startLng: 13.264837,
    endLat: -33.936138,
    endLng: 18.436529,
    arcAlt: 0.2,
    color: rc()
  },
  {
    order: 8,
    startLat: 49.2827,
    startLng: -123.1207,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.2,
    color: rc()
  },
  {
    order: 8,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: rc()
  },
  {
    order: 9,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: rc()
  },
  {
    order: 9,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.7,
    color: rc()
  },
  {
    order: 9,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.5,
    color: rc()
  },
  {
    order: 10,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: 28.6139,
    endLng: 77.209,
    arcAlt: 0.7,
    color: rc()
  },
  {
    order: 10,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 10,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 11,
    startLat: 41.9028,
    startLng: 12.4964,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: rc()
  },
  {
    order: 11,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.2,
    color: rc()
  },
  {
    order: 11,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: rc()
  },
  {
    order: 12,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.1,
    color: rc()
  },
  {
    order: 12,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.2,
    color: rc()
  },
  {
    order: 12,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 13,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 13,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 13,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.1,
    color: rc()
  },
  {
    order: 14,
    startLat: -33.936138,
    startLng: 18.436529,
    endLat: 21.395643,
    endLng: 39.883798,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 15,
    startLat: 40.7128,
    startLng: -74.006,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.1,
    color: rc()
  },
  {
    order: 15,
    startLat: 40.7128,
    startLng: -74.006,
    endLat: 41.8781,
    endLng: -87.6298,
    arcAlt: 0.1,
    color: rc()
  },
  {
    order: 15,
    startLat: 37.7749,
    startLng: -122.4194,
    endLat: 47.6062,
    endLng: -122.3321,
    arcAlt: 0.1,
    color: rc()
  },
  {
    order: 16,
    startLat: 43.6532,
    startLng: -79.3832,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.1,
    color: rc()
  },
  {
    order: 16,
    startLat: 19.4326,
    startLng: -99.1332,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.2,
    color: rc()
  },
  {
    order: 16,
    startLat: 19.4326,
    startLng: -99.1332,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.1,
    color: rc()
  },
  {
    order: 17,
    startLat: 40.7128,
    startLng: -74.006,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 17,
    startLat: 40.7128,
    startLng: -74.006,
    endLat: 48.8566,
    endLng: 2.3522,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 17,
    startLat: 40.7128,
    startLng: -74.006,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 18,
    startLat: 37.7749,
    startLng: -122.4194,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.4,
    color: rc()
  },
  {
    order: 18,
    startLat: 49.2827,
    startLng: -123.1207,
    endLat: 48.8566,
    endLng: 2.3522,
    arcAlt: 0.4,
    color: rc()
  },
  {
    order: 19,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 41.9028,
    endLng: 12.4964,
    arcAlt: 0.1,
    color: rc()
  },
  {
    order: 19,
    startLat: 48.8566,
    startLng: 2.3522,
    endLat: 40.4168,
    endLng: -3.7038,
    arcAlt: 0.1,
    color: rc()
  },
  {
    order: 19,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 59.9139,
    endLng: 10.7522,
    arcAlt: 0.1,
    color: rc()
  },
  {
    order: 20,
    startLat: 41.9028,
    startLng: 12.4964,
    endLat: 37.9838,
    endLng: 23.7275,
    arcAlt: 0.1,
    color: rc()
  },
  {
    order: 20,
    startLat: 52.3676,
    startLng: 4.9041,
    endLat: 60.1699,
    endLng: 24.9384,
    arcAlt: 0.1,
    color: rc()
  },
  {
    order: 21,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 25.2048,
    endLng: 55.2708,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 21,
    startLat: 48.8566,
    startLng: 2.3522,
    endLat: 30.0444,
    endLng: 31.2357,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 21,
    startLat: 52.52,
    startLng: 13.405,
    endLat: -26.2041,
    endLng: 28.0473,
    arcAlt: 0.5,
    color: rc()
  },
  {
    order: 22,
    startLat: 25.2048,
    startLng: 55.2708,
    endLat: 28.6139,
    endLng: 77.209,
    arcAlt: 0.2,
    color: rc()
  },
  {
    order: 22,
    startLat: 25.2048,
    startLng: 55.2708,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 23,
    startLat: 30.0444,
    startLng: 31.2357,
    endLat: -26.2041,
    endLng: 28.0473,
    arcAlt: 0.4,
    color: rc()
  },
  {
    order: 23,
    startLat: 6.5244,
    startLng: 3.3792,
    endLat: -26.2041,
    endLng: 28.0473,
    arcAlt: 0.4,
    color: rc()
  },
  {
    order: 23,
    startLat: 6.5244,
    startLng: 3.3792,
    endLat: 30.0444,
    endLng: 31.2357,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 24,
    startLat: -1.2921,
    startLng: 36.8219,
    endLat: 6.5244,
    endLng: 3.3792,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 24,
    startLat: -1.2921,
    startLng: 36.8219,
    endLat: 25.2048,
    endLng: 55.2708,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 25,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 19.076,
    endLng: 72.8777,
    arcAlt: 0.1,
    color: rc()
  },
  {
    order: 25,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: rc()
  },
  {
    order: 25,
    startLat: 23.8103,
    startLng: 90.4125,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: rc()
  },
  {
    order: 26,
    startLat: 13.7563,
    startLng: 100.5018,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.2,
    color: rc()
  },
  {
    order: 26,
    startLat: 13.7563,
    startLng: 100.5018,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.1,
    color: rc()
  },
  {
    order: 26,
    startLat: 21.0285,
    startLng: 105.8542,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: rc()
  },
  {
    order: 27,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.4,
    color: rc()
  },
  {
    order: 27,
    startLat: 37.5665,
    startLng: 126.978,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: rc()
  },
  {
    order: 27,
    startLat: 31.2304,
    startLng: 121.4737,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.4,
    color: rc()
  },
  {
    order: 28,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: rc()
  },
  {
    order: 29,
    startLat: -23.5505,
    startLng: -46.6333,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.1,
    color: rc()
  },
  {
    order: 29,
    startLat: -23.5505,
    startLng: -46.6333,
    endLat: -12.0464,
    endLng: -77.0428,
    arcAlt: 0.2,
    color: rc()
  },
  {
    order: 29,
    startLat: -23.5505,
    startLng: -46.6333,
    endLat: 4.711,
    endLng: -74.0721,
    arcAlt: 0.3,
    color: rc()
  },
  {
    order: 30,
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: rc()
  },
  {
    order: 30,
    startLat: -23.5505,
    startLng: -46.6333,
    endLat: -33.936138,
    endLng: 18.436529,
    arcAlt: 0.6,
    color: rc()
  },
  {
    order: 31,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: rc()
  },
  {
    order: 31,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.5,
    color: rc()
  },
  {
    order: 31,
    startLat: -36.8485,
    startLng: 174.7633,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.3,
    color: rc()
  }
]
