// Penger.js ile aynı formatta stilize bir balık modeli
const vs = [
    {x: 0.000000, y: 0.500000, z: 0.000000},  // Üst yüzgeç ucu (0)
    {x: 0.000000, y: -0.500000, z: 0.000000}, // Alt yüzgeç ucu (1)
    {x: 0.000000, y: 0.000000, z: 1.000000},  // Burun ucu (2)
    {x: 0.000000, y: 0.000000, z: -1.000000}, // Kuyruk ucu (3)
    {x: 0.400000, y: 0.000000, z: 0.000000},  // Sağ yan (4)
    {x: -0.400000, y: 0.000000, z: 0.000000}, // Sol yan (5)
    {x: 0.200000, y: 0.200000, z: 0.400000},  // Sağ üst gövde (6)
    {x: -0.200000, y: 0.200000, z: 0.400000}, // Sol üst gövde (7)
    {x: 0.200000, y: -0.200000, z: 0.400000}, // Sağ alt gövde (8)
    {x: -0.200000, y: -0.200000, z: 0.400000}  // Sol alt gövde (9)
];

const fs = [
    [2, 6, 7], // Burun üst yüzeyi
    [2, 8, 9], // Burun alt yüzeyi
    [2, 6, 8], // Burun sağ yan
    [2, 7, 9], // Burun sol yan
    [6, 4, 8], // Orta gövde sağ
    [7, 5, 9], // Orta gövde sol
    [0, 6, 7], // Üst yüzgeç bağlantısı
    [1, 8, 9], // Alt yüzgeç bağlantısı
    [3, 4, 0], // Kuyruk üst sağ
    [3, 5, 0], // Kuyruk üst sol
    [3, 4, 1], // Kuyruk alt sağ
    [3, 5, 1]  // Kuyruk alt sol
];