'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { 
  TextInput, 
  Select, 
  Table, 
  Paper, 
  Title, 
  Container, 
  Stack,
  Text,
  Group
} from '@mantine/core'

interface PersonData {
  id: number
  ad: string
  soyad: string
  yas: number
  mahalle: string
  ilce: string
}

export default function NufusAra() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIlce, setSelectedIlce] = useState<string | null>(null)
  const [selectedMahalle, setSelectedMahalle] = useState<string | null>(null)

  // Örnek veri - Gerçek uygulamada API'den gelecek
  const sampleData: PersonData[] = [
    { id: 1, ad: 'Ahmet', soyad: 'Yılmaz', yas: 35, mahalle: 'Kumbahçe', ilce: 'Bodrum' },
    { id: 2, ad: 'Ayşe', soyad: 'Demir', yas: 28, mahalle: 'Türkkuyusu', ilce: 'Bodrum' },
    { id: 3, ad: 'Mehmet', soyad: 'Kaya', yas: 45, mahalle: 'Çarşı', ilce: 'Gümbet' },
    // Daha fazla örnek veri eklenebilir
  ]

  const ilceler = ['Bodrum', 'Gümbet', 'Turgutreis', 'Yalıkavak']
  const mahalleler = ['Kumbahçe', 'Türkkuyusu', 'Çarşı', 'Merkez']

  const filteredData = sampleData.filter(person => {
    const matchesSearch = 
      person.ad.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.soyad.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesIlce = !selectedIlce || person.ilce === selectedIlce
    const matchesMahalle = !selectedMahalle || person.mahalle === selectedMahalle

    return matchesSearch && matchesIlce && matchesMahalle
  })

  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      <Container size="xl" py="xl">
        <Paper shadow="sm" p="xl" radius="md">
          <Title order={2} mb="lg" c="blue">Nüfus Ara</Title>
          
          <Stack gap="md" mb="xl">
            <Group grow>
              <TextInput
                placeholder="İsim veya soyisim ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Select
                placeholder="İlçe seçin"
                data={ilceler}
                value={selectedIlce}
                onChange={setSelectedIlce}
                clearable
              />
              <Select
                placeholder="Mahalle seçin"
                data={mahalleler}
                value={selectedMahalle}
                onChange={setSelectedMahalle}
                clearable
              />
            </Group>
          </Stack>

          <Paper withBorder>
            <Table striped highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Ad</Table.Th>
                  <Table.Th>Soyad</Table.Th>
                  <Table.Th>Yaş</Table.Th>
                  <Table.Th>Mahalle</Table.Th>
                  <Table.Th>İlçe</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {filteredData.map((person) => (
                  <Table.Tr key={person.id}>
                    <Table.Td>{person.ad}</Table.Td>
                    <Table.Td>{person.soyad}</Table.Td>
                    <Table.Td>{person.yas}</Table.Td>
                    <Table.Td>{person.mahalle}</Table.Td>
                    <Table.Td>{person.ilce}</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
            {filteredData.length === 0 && (
              <Text c="dimmed" ta="center" py="xl">
                Sonuç bulunamadı
              </Text>
            )}
          </Paper>
        </Paper>
      </Container>
    </main>
  )
} 