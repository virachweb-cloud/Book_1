import { Button } from "@/components/ui/button";
import { Download, Book } from "lucide-react";
import bookCover from "@/assets/book-cover.png";

const Index = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/1 copy.pdf';
    link.download = '1 copy.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-2xl font-bold text-primary-foreground text-center">ammaanugraham.com</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center space-y-12">
          {/* Book Title */}
          <div className="space-y-6">
            <div className="flex justify-center mb-8">
              <img 
                src={bookCover} 
                alt="Navara Pooja Book Cover" 
                className="w-48 h-64 object-cover rounded-lg shadow-elegant"
              />
            </div>
            <h2 className="text-4xl font-bold text-secondary mb-4">
              దేవి నవరాత్రి పూజా పుస్తకం(PDF)
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              ఈ పుస్తకం లో గృ హస్థు లు సు లభం గా అను సరిం చగల దేవి నవరాత్రి పూజా విధానం ,
            ప్రతిరోజుకి సం బం ధిం చిన మం త్రాలు , స్తోత్రాలు , మరియు వివరమైన పూజా క్రమంక్ర మం సమగ్రం గా ఇవ్వ బడ్డాయ.
            </p>
          </div>

          {/* Download Button */}
          <Button 
            variant="download" 
            size="sm"
            onClick={handleDownload}
            className="gap-2 text-sm px-6 py-2"
          >
            <Download className="h-4 w-4" />
             మీరు ఈ పుసకా చదవవచు లేదా PDF డౌ డ్ చేసుకోవచు 
          </Button>

          {/* About Section */}
          <div className="mt-16 text-left max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-secondary mb-6 flex items-center gap-3">
              <Book className="h-6 w-6 text-primary" />
              About
            </h3>
             <div className="space-y-4 text-muted-foreground leading-relaxed">
               <p>
                 మన సంస తి ఆధాతిక సంపదను నిలుపుకోవడం మరియు పంచుకోవడంలో మకువ
 కలిగినవాళం. ఈ దేవి నవరాతి పుసకం ఆరాధకులకు పవితమైన తొ ది రోజుల పండుగలో
 సరళతతో మరియు భతో మారనిశం చేసుంది.
 ఈ పుసకంలో కాలూ (మం లు) సులభంగా చెపగలవు, అందువల అనుభవజుల నుండి కొతగాప
 ూజ చేసే వారు కూడా భతో అనుభూతి ందవచు . నవరాతి పతి రోజు కోసం సషమైన పూజావధానం ఇవబడింది, దీని దారా మీ ఇం భతో ఆరాధన చేయవచు .
 మల ం ఆధాతిక అనుభవాలను సులభంగా, అరవంతంగా, మరియు హృదయపూరకంగా
 అందించడం. ఈ పుసకం మీ జీవితంలో ంతి, సంపద, మరియు దేవి ఆశీరాదాలు తీసుకురావాలని
 ఆశిసు ము.
 ఆర్.కె. ఆచారులు , ఆర్. అనురాధ.
               </p>
             </div>
             <div className="mt-6 text-sm text-muted-foreground">
               <p>ఆర్.కె. ఆచారులు , ఆర్. అనురాధ</p>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
