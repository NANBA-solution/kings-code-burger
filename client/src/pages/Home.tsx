/*
Design Philosophy: Urban Grunge Americana
- Charcoal black (#1a1a1a) base with lime green (#a4c639) accents
- Rough textures meet refined typography (Bebas Neue + Roboto)
- Diagonal cuts and overlapping elements
- Smash burger "press" visual metaphor with dynamic layouts
*/

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, MapPin, Phone, Clock, Instagram } from "lucide-react";

export default function Home() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    {
      name: "CHEESE BURGER",
      nameJa: "チーズバーガー",
      price: "¥1,200",
      description: "100%オージービーフのパティをスマッシュ。チェダーチーズ、自家製ソース、新鮮な野菜。",
      tag: "定番",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80"
    },
    {
      name: "DOUBLE CHEESE",
      nameJa: "ダブルチーズバーガー",
      price: "¥2,000",
      description: "パティ2枚、チーズ2枚。肉々しさMAX。ガッツリ食べたい方に。",
      tag: "人気NO.1",
      tagColor: "lime",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/kg2ECc2675ZMoJSDZdXVXy/sandbox/HlBaHJCulPei3ja9LAykEN-img-2_1771133840000_na1fn_ZG91YmxlLWNoZWVzZS1idXJnZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2cyRUNjMjY3NVpNb0pTRFpkWFZYeS9zYW5kYm94L0hsQmFISkN1bFBlaTNqYTlMQXlrRU4taW1nLTJfMTc3MTEzMzg0MDAwMF9uYTFmbl9aRzkxWW14bExXTm9aV1Z6WlMxaWRYSm5aWEkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=awsBjLNS7kjQjnnusLyVAQQkwQGoGjsS1f89WcBJtly-DyFoDiBvNdMnmTS0-WECPAc-bT-p72MMbiYVx6zodcP8H1EGlvQBySZR71A7ynRDbmrGyTsdZdxY4OrEtWQVCR-jrF08OR48oc~E~J~sAKk7qzerzdQrNq-Y3ZXrpE9sXiqRm-UlF0F-OEfvyUw8YOE1qK9zgrSBjfNW-jsdsF2~TkObsl4g-mGZJb7T4g05jJoRXO6xmaB-W960orDU~yLy99E7T4bqgDD75fLb1iaOwt08vbmc0XrO-14if-uHb~nUPewW~M1gHoF05-pwUSu0wwFxs6H~Kqw7AJiCeQ__"
    },
    {
      name: "HOT CHICKEN",
      nameJa: "ナッシュビルホットチキン",
      price: "¥1,200",
      description: "アメリカ南部の名物。自家製スパイスで仕上げたスパイシーなチキン。",
      tag: "本格派",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/kg2ECc2675ZMoJSDZdXVXy/sandbox/HlBaHJCulPei3ja9LAykEN-img-3_1771133840000_na1fn_aG90LWNoaWNrZW4tYnVyZ2Vy.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2cyRUNjMjY3NVpNb0pTRFpkWFZYeS9zYW5kYm94L0hsQmFISkN1bFBlaTNqYTlMQXlrRU4taW1nLTNfMTc3MTEzMzg0MDAwMF9uYTFmbl9hRzkwTFdOb2FXTnJaVzR0WW5WeVoyVnkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CphZJd45WexCTOgkoUVkoeqhQwP2mAb35eCIW-DBMuDrnug1JW6XAeujvrUAv4dagYvL7YMpT8KpIYBNVfpf4bdtWxqv9-dPFWjhuFk-xEP-doh9EEKojNGs9szwkP0s-fJrZPXTWyNas1DEPjB6UqNefv6REjyOvqSHFrljok~PyrMgxkB2OMJ70HChoavOGUnpD0sg0ai2wCcrYiKHYw4skclzqgnBVsTUhvhsaQyEmZeWZF9ePQPBQLiu0CSVCEHVqsYk~dMdeVIySadv440MVbvpspLwu2S4nFKpKI~hles0UySgNDNJdtrZtmOS5l86Za-5Y7H2sSHXNTG3Rw__"
    },
    {
      name: "HAMBURGER",
      nameJa: "ハンバーガー",
      price: "¥1,300",
      description: "シンプルだからこそ、肉の旨味が際立つ。",
      tag: "",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80"
    },
    {
      name: "BACON LETTUCE",
      nameJa: "ベーコンレタスバーガー",
      price: "¥1,400",
      description: "厚切りベーコン、シャキシャキレタス、トマト。",
      tag: "",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/kg2ECc2675ZMoJSDZdXVXy/sandbox/HlBaHJCulPei3ja9LAykEN-img-4_1771133835000_na1fn_YmFjb24tYnVyZ2Vy.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2cyRUNjMjY3NVpNb0pTRFpkWFZYeS9zYW5kYm94L0hsQmFISkN1bFBlaTNqYTlMQXlrRU4taW1nLTRfMTc3MTEzMzgzNTAwMF9uYTFmbl9ZbUZqYjI0dFluVnlaMlZ5LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DLdxGT1uY5BoHIq6uhHqb6k01WkbHkm8gvSZSJCw5RMUcdgxyCb90tIQnANhClaN40etkCkiz1A8bKMVjF1K67oh8S-qnWnrFk-7z0hdGAG3WRiCvD8i0TQA8FfRuBs2aDA-bZiTpjg3eCCYJPG2MjO28VCdq9i3TIjU2jdOkja9ZuYDeXrukrJ3VFZORw0KKcmRVGsKKyqHfRbEnoikYNTxTcRrfc2oL7tKs1cAEBroL~Gqx2ihHIaIlz1RnOfdRnAXdx37f--ROLOBfc08oIGntq2DhURJPtBwM1FtgToxspgdWHnkoXW9KlZfULDcQ1ta9M-WAJ5ZGl~ARJvVSg__"
    },
    {
      name: "DOUBLE BURGER",
      nameJa: "ダブルハンバーガー",
      price: "¥2,000",
      description: "パティ2枚で肉の旨味を堪能。ボリューム満点。",
      tag: "",
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&q=80"
    },
    {
      name: "THICK BACON",
      nameJa: "厚切りベーコンレタスバーガー",
      price: "¥1,800",
      description: "厚切りベーコンたっぷり。食べ応え抜群。",
      tag: "",
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&q=80"
    },
    {
      name: "JUNK CHEESE",
      nameJa: "ジャンクチーズバーガー",
      price: "¥1,800",
      description: "店内飲食のみ / Dine-in only",
      tag: "",
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&q=80"
    }
  ];

  const reviews = [
    {
      text: "Best burger I've had in Japan. No joke. Perfectly cooked. Juicy and so full of flavour.",
      author: "アメリカ人観光客",
      flag: "🇺🇸"
    },
    {
      text: "Proper hidden gem. The beef is 100% Aussie, and you can tell—it's rich, flavorful, and cooked just right.",
      author: "オーストラリア人観光客",
      flag: "🇦🇺"
    },
    {
      text: "シンプルだからこそ、肉の旨味が際立つ。外はカリカリ、中はジューシー。今まで食べた中で最高のバーガーです。",
      author: "日本人リピーター",
      flag: "🇯🇵"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold text-primary">KING'S CODE</h1>
          <div className="flex gap-6">
            <a href="#philosophy" className="text-sm text-foreground hover:text-primary transition-colors">PHILOSOPHY</a>
            <a href="#menu" className="text-sm text-foreground hover:text-primary transition-colors">MENU</a>
            <a href="#reviews" className="text-sm text-foreground hover:text-primary transition-colors">REVIEWS</a>
            <a href="#access" className="text-sm text-foreground hover:text-primary transition-colors">ACCESS</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grunge-texture">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/kg2ECc2675ZMoJSDZdXVXy/sandbox/HlBaHJCulPei3ja9LAykEN-img-1_1771133839000_na1fn_aGVyby1idXJnZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2cyRUNjMjY3NVpNb0pTRFpkWFZYeS9zYW5kYm94L0hsQmFISkN1bFBlaTNqYTlMQXlrRU4taW1nLTFfMTc3MTEzMzgzOTAwMF9uYTFmbl9hR1Z5YnkxaWRYSm5aWEkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=elwZ1FANyhc0-iQwTz~YK~pHzFXJfy-7BCvIobL6BvkZmes90DqwG-zWmEeOVhLb8Pv9rqZBud5sV6LhLlF6euSaqaelfbhTbW1qoClIHmxvqtk4n5aM5M~PJy25wYw-to~v~yeCdN1ryWKZPlX6JxalN0wXUKWh5g7cPcLsmMZtWjUgcATh0NqFzrzONjXMgsFytNNA7xv4OaNfxlWdLtZMU2tI6MNBvZyzbL-DCwa6cNOVJYzV8Nhq46RQjhckzeU4zg9lkNCu~XVumALT-nm~7KROX63qzKNtvmAm1oNEhnbsnChj3Xkudy3yntn5JWrsnjts~OPMgEx1Iji9EA__')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="container relative z-10 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-7xl md:text-9xl font-bold mb-4 text-foreground">
              OSAKA'S<br />
              <span className="text-primary accent-line inline-block">BEST</span><br />
              BURGER
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              100%オージービーフを高温でスマッシュ。<br />
              外はカリッ、中はジュワッ。本物の味を、誤魔化さない。
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-lg font-bold text-foreground">4.7 / 5.0</span>
            </div>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 font-bold"
              onClick={scrollToMenu}
            >
              VIEW MENU
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 bg-card diagonal-cut-top grunge-texture">
        <div className="container">
          <h2 className="text-6xl md:text-8xl font-bold text-center mb-4 text-primary">PHILOSOPHY</h2>
          <p className="text-center text-2xl text-muted-foreground mb-16">シンプルだからこそ、美味い</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-background border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-primary">100% AUSSIE BEEF</h3>
                <p className="text-muted-foreground leading-relaxed">
                  厳選されたオーストラリア産牛肉を100%使用。冷凍パティは一切使わず、毎日新鮮な状態でご提供。
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-background border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-primary">SMASH TECHNIQUE</h3>
                <p className="text-muted-foreground leading-relaxed">
                  高温の鉄板で一気にプレス。外はカリカリ、中はジューシー。アメリカで大人気の調理法を忠実に再現。
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-background border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-primary">HOUSE-MADE</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ソース、トッピング、スパイスまですべて店内で手作り。化学調味料は一切使用していません。
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-background diagonal-cut-bottom grunge-texture">
        <div className="container">
          <h2 className="text-6xl md:text-8xl font-bold text-center mb-4 text-primary">MENU</h2>
          <p className="text-center text-lg text-muted-foreground mb-16">※セット only (Fries + Drink included)</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Card 
                key={index} 
                className="overflow-hidden bg-card border-2 border-border hover:border-primary transition-all duration-300 hover:transform hover:rotate-1 hover:scale-105 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {item.tag && (
                    <div className={`absolute top-4 right-4 px-4 py-2 font-bold text-sm ${item.tagColor === 'lime' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                      {item.tag}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.nameJa}</p>
                    </div>
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-card grunge-texture">
        <div className="container">
          <h2 className="text-6xl md:text-8xl font-bold text-center mb-4 text-primary">REVIEWS</h2>
          <p className="text-center text-xl text-muted-foreground mb-16">Google 4.7★ / 5.0 (83 Reviews)</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-8 bg-background border-l-4 border-primary relative">
                <div className="absolute top-6 left-6 text-6xl text-primary opacity-20">"</div>
                <div className="relative z-10">
                  <p className="text-foreground mb-6 leading-relaxed italic">{review.text}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{review.flag}</span>
                    <div>
                      <div className="flex mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">{review.author}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="py-24 bg-background grunge-texture">
        <div className="container">
          <h2 className="text-6xl md:text-8xl font-bold text-center mb-4 text-primary">ACCESS</h2>
          <p className="text-center text-xl text-muted-foreground mb-16">南森町駅から徒歩5分</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-card border-2 border-border">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-primary">ADDRESS</h3>
                  <p className="text-foreground text-lg">大阪市北区西天満5-11-4</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <svg className="w-8 h-8 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-primary">STATION</h3>
                  <p className="text-foreground text-lg">南森町駅 徒歩5分</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 border-border">
              <div className="flex items-start gap-4 mb-6">
                <Phone className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-primary">PHONE</h3>
                  <p className="text-foreground text-lg">080-1520-0694</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-primary">HOURS</h3>
                  <p className="text-foreground text-lg">平日: 13:00-20:00</p>
                  <p className="text-foreground text-lg">週末: 11:00-20:00</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">KING'S CODE BURGER</h3>
              <p className="text-muted-foreground">大阪で一番ジューシーなスマッシュバーガー</p>
            </div>
            <div className="flex gap-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <MapPin className="w-6 h-6" />
              </a>
              <a href="https://ubereats.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 King's Code Burger. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
