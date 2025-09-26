import { Button } from "@/components/ui/button";
import { Download, Book } from "lucide-react";
import bookCover from "@/assets/book-cover.png";

// Add your 5 images - using images from public folder
import img1 from "/CBN image.webp";
import img2 from "/PK DCM.webp";
import img3 from "/lokesh Nara.jpeg";
import img5 from "/naveen jyuthula.jpg";
import img4 from "/Nehru MLA.jpg";

const Index = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ammaanugraham.pdf";
    link.download = "Ammaanugraham.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-2xl font-bold text-primary-foreground text-center">
            ammaanugraham.com
          </h1>
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
              దేవి నవరాత్రి పూజా పుస్తకం (PDF)
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              పవిత్రమైన దేవి నవరాత్రులు భారతదేశంలో భక్తిశ్రద్ధలతో జరుపుకుంటారు. తొమ్మిది
              రోజులపాటు దుర్గాదేవి తొమ్మిది రూపాలను స్తోత్రాలు, మంత్రాలు, పూజలతో
              ఆరాధిస్తారు.
              <br />
              <br />
              ఈ వెబ్‌సైట్ ద్వారా మేము భక్తులందరికీ ఒక ప్రత్యేకమైన పుస్తకాన్ని అందిస్తున్నాము.
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
            చదవండి లేదా PDF డౌన్‌లోడ్ చేసుకోండి
          </Button>

          <hr className="my-12 border-t bored-600 text-primary w-3/4 mx-auto" />

          <p className=" text-secondary mb-4">
              ఆంధ్రప్రదేశ్ ముఖ్యమంత్రి<br/> <strong>శ్రీ నారా చంద్రబాబు నాయుడు</strong> గరిచే ఆవిష్కరించబడిన పుస్తకం
            </p>
          <div className="flex justify-center mb-8">
                  <img
                    src="/Launched by CM.png"
                    alt="Launched by CM"
                    className="w-58 h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
          
          <hr className="my-12 border-t bored-600 text-primary w-3/4 mx-auto" />


          {/* About Section */}
          <div className="mt-16 text-left max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-secondary mb-6 flex items-center gap-3">
              <Book className="h-6 w-6 text-primary" />
              About book/పుస్తకం గురించి
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ఈ పుస్తకం నవరాత్రి పూజను ఇంటి వద్ద సులభంగా చేయదలచిన భక్తుల కోసం
                ప్రత్యేకంగా రూపొందించబడింది.
                <br />
                <br />• నవరాత్రి తొమ్మిది రోజుల పూజా విధానం
                <br />• సులభంగా పఠించగల స్లోకాలూ మరియు మంత్రాలు
                <br />• స్పష్టమైన, సరళమైన తెలుగు భాషలో
                <br />• కొత్తగా పూజ చేసే వారు, అనుభవజ్ఞులు ఇద్దరికీ అనుకూలం
                <br />
                <br />
                ఈ గ్రంథం ద్వారా ప్రతి కుటుంబంలో శాంతి, భక్తి, దేవి ఆశీస్సులు నిండాలని మా ఆకాంక్ష.
              </p>
            </div>

            {/* About Us */}
            <div className="mt-16 text-left max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-secondary mb-6 flex items-center gap-3">
                <Book className="h-6 w-6 text-primary" />
                About us/మా గురించి
              </h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                భారతీయ ఆధ్యాత్మిక సంపదను భక్తులకు చేరవేయడమే మా సంకల్పం.
                <br />
                <br />
                అమ్మానుగ్రహం ద్వారా <strong>దేవి నవరాత్రి పూజ</strong>ను ప్రతి భక్తుడు ఇంట్లోనే
                సులభంగా చేయగలిగే మార్గాన్ని చూపించడం మా లక్ష్యం.
                <br />
                <br />🙏 అమ్మ దయతో మీ కుటుంబానికి శాంతి, సంపద, ఆనందం కలగాలని మనసారా
                కోరుకుంటున్నాము.
                <br />
              </p>
            </div>

            <div className="mt-8 text-sm text-muted-foreground">
              <p><strong>ప్రచురణకర్తలు:</strong></p>
              <div className="flex flex-col items-center mb-8">
                <img
                  src="/IMG_0214.jpg"
                  alt="Image"
                  className="w-58 h-48 object-cover rounded-lg shadow-lg mb-4"
                />
              </div>
              <p>

                <div className ="flex flex-col items-center ">
                <strong>ఆర్. కె. ఆచార్యులు</strong> (AP High Court Standing Counsel)
                <strong>శ్రీమతి ఆర్. అనురాధ</strong> (VBM స్కూల్ Correspondent)

                </div>
              </p>
            </div>
          </div>

          <hr className="my-12 border-t bored-600 text-primary w-3/4 mx-auto" />

          {/* 5 Circle Images */}
          <div className="mt-20 flex flex-wrap justify-center gap-8">
            {[img1, img2, img3, img4, img5].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-32 h-32 rounded-full object-cover shadow-lg border-2 border-primary"
              />
            ))}
          </div>

          <hr className="my-12 border-t bored-600 text-primary w-3/4 mx-auto" />


          {/* Copyright */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 <strong>Virach IT & Software solutions Pvt Ltd</strong>,All rights reserved 
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
