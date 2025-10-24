import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Crosshair" size={28} className="text-primary" />
            <span className="text-xl font-bold">SWEP MINIGUN MOD</span>
          </div>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#download" className="hover:text-primary transition-colors">Download</a>
            <a href="#documentation" className="hover:text-primary transition-colors">Documentation</a>
          </div>
        </div>
      </nav>

      <section id="home" className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Garry's Mod Weapon
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              SWEP MINIGUN
            </h1>
            <p className="text-xl text-muted-foreground">
              Мощный минималистичный мод оружия для Garry's Mod с базовой механикой стрельбы и реалистичной отдачей
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Download" size={20} className="mr-2" />
                Download
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="FileText" size={20} className="mr-2" />
                Documentation
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg blur-3xl opacity-20"></div>
            <Card className="relative border-2 border-border hover:border-primary transition-all duration-300 hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl">Weapon Mod Card</CardTitle>
                <CardDescription className="text-base">Garry's Mod Minigun</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center py-8 bg-muted/50 rounded-lg">
                  <Icon name="Crosshair" size={120} className="text-primary" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  DOWNLOAD
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Особенности</h2>
            <p className="text-muted-foreground text-lg">Все что нужно для мощного минигана</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Target" size={24} className="text-primary" />
                </div>
                <CardTitle>Базовая стрельба</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Оптимизированная механика выстрелов с высокой скорострельностью
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                </div>
                <CardTitle>Отдача</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Реалистичная система отдачи для баланса и игрового процесса
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <CardTitle>Высокий урон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Мощные выстрелы с настраиваемым уроном для разных режимов игры
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="specs" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Технические характеристики</h2>
            
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Gauge" size={20} className="text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Скорострельность</div>
                        <div className="font-semibold">1000 RPM</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Icon name="Battery" size={20} className="text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Боезапас</div>
                        <div className="font-semibold">200 патронов</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Icon name="Flame" size={20} className="text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Урон за выстрел</div>
                        <div className="font-semibold">15 HP</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Move" size={20} className="text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Отдача</div>
                        <div className="font-semibold">Средняя</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Icon name="Focus" size={20} className="text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Точность</div>
                        <div className="font-semibold">Высокая</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Icon name="Loader" size={20} className="text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Перезарядка</div>
                        <div className="font-semibold">3.5 сек</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="download" className="bg-secondary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готов попробовать?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Скачай мод прямо сейчас и испытай мощь минигана в Garry's Mod
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
            <Icon name="Download" size={24} className="mr-2" />
            Скачать SWEP Minigun Mod
          </Button>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>SWEP Minigun Mod © 2024 | Created with ❤️ for Garry's Mod</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
