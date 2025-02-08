import Link from 'next/link'
import { Card, Text, Stack, Title, Button, Group } from '@mantine/core'

export default function LatestBlogs() {
  const blogs = [
    {
      title: 'Son Teknolojik Gelişmeler',
      excerpt: 'Teknoloji dünyasındaki son gelişmeleri sizin için derledik...',
      slug: 'son-teknolojik-gelismeler',
      date: '12 Mart 2024'
    },
    {
      title: 'Başarı Hikayeleri',
      excerpt: 'Müşterilerimizin başarı hikayelerini keşfedin...',
      slug: 'basari-hikayeleri',
      date: '10 Mart 2024'
    }
  ]

  return (
    <Card shadow="sm" padding="lg" radius="md">
      <Title order={3} mb="md">Son Yazılar</Title>
      <Stack gap="md">
        {blogs.map((blog, index) => (
          <div key={index}>
            <Text size="sm" c="dimmed" mb="xs">
              {blog.date}
            </Text>
            <Title order={4} mb="xs">
              {blog.title}
            </Title>
            <Text mb="sm" lineClamp={2}>
              {blog.excerpt}
            </Text>
            <Group justify="flex-start">
              <Button
                component={Link}
                href={`/blog/${blog.slug}`}
                variant="light"
                size="sm"
              >
                Devamını Oku
              </Button>
            </Group>
          </div>
        ))}
      </Stack>
    </Card>
  )
} 