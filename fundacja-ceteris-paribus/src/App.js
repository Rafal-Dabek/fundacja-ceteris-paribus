import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';



function App() {
  const [showCookiePopup, setShowCookiePopup] = useState(true);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted) {
      setShowCookiePopup(false);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookiePopup(false);
  };

  return (
    <div className="App"  >
      <Navbar collapseOnSelect expand="lg" className="navbar-light">
  <Navbar.Brand href="#home">
    <img
      src="/images/Black White Elegant Monogram Initial Name Logo.svg"
      alt="Fundacja Ceteris Paribus Logo"
      className="logo"
      style={{ maxWidth: '150px', maxHeight: '150px' }}
    />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Item>
        <Nav.Link className="nav-link btn  btn-lg btn-custom" href="#o-fundacji">O FUNDACJI</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav-link btn btn-lg btn-custom" href="#aktualnosci">AKTUALNOŚCI</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav-link btn  btn-lg btn-custom" href="#statut">STATUT</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav-link btn  btn-lg btn-custom" href="#kontakt">KONTAKT</Nav.Link>
      </Nav.Item>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>
      {showCookiePopup && (
        <div className="cookie-popup bg-dark text-white p-2">
          <p>Ta strona używa ciasteczek. Kliknij "Akceptuj", aby kontynuować.</p>
          <button className="btn btn-light" onClick={acceptCookies}>Akceptuj</button>
        </div>
      )}

      <main className="p-3"  >
       

        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">STATUT FUNDACJI ODPOWIEDZIALNY PRACODAWCA</h5>
            <h6>Rozdział I. Postanowienia ogólne </h6>
            
           <p className="card-text">§ 1 </p> 
           <p className="card-text">
1.  Niniejszy statut określa zasady działania fundacji o nazwie Fundacja CETERIS PARIBUS zwaną dalej Fundacją. 
<br></br>
2.  Fundacja działa na podstawie przepisów ustawy z dnia 6 kwietnia 1984 roku o fundacjach (tekst jednolity: Dz.U. z 1991r. Nr 46, poz.203 ze zm.) oraz postanowień niniejszego Statutu. 
<br></br>
3.  Fundacja została ustanowiona przez Joannę Julię Zukowską, zwaną dalej Fundatorem, aktem notarialnym sporządzonym w dniu 26 września 2013 roku przez emerytowaną notariusz Teresę Starostę, zastępcę Krzysztofa Borawskiego Notariusza w Warszawie, za Rep. A nr 6301/2013  
</p>
<p className="card-text">§ 2 </p> 
<p className="card-text">
Fundacja posiada osobowość prawną. 

</p>

<p className="card-text">§ 3 </p> 
<p className="card-text">
l . Siedzibą Fundacji jest miasto Warszawa. 
<br></br>
2. Czas trwania Fundacji jest nieoznaczony. 
</p>
 

<p className="card-text">§ 4 </p> 
<p className="card-text">
l . Terenem działania Fundacji jest cały obszar Rzeczypospolitej Polskiej, przy czym  
w zakresie niezbędnym dla właściwego realizowania celów może ona prowadzić działalność także poza granicami Rzeczypospolitej Polskiej. 
<br></br>
2.  Fundacja może posiadać oddziały, w tym i zamiejscowe oraz tworzyć inne jednostki organizacyjne. 
<br></br>
3.  Fundacja może dla celów współpracy z zagranicą posługiwać się tłumaczeniem nazwy w wybranych językach obcych. 

</p>

<p className="card-text">§ 5 </p> 
 
<p className="card-text">
Nadzór nad Fundacją sprawuje Minister Pracy i Polityki Społecznej. 
</p>
 
 

<p className="card-text">§ 6 </p> 
<p className="card-text">

Fundacja używa pieczątek z danymi identyfikacyjnymi Fundacji oraz może używać znaków graficznych. 

</p>

<p className="card-text">§ 7 </p>
 
<p className="card-text">
Fundacja może ustanawiać odznaki, medale honorowe i przyznawać je wraz z innymi nagrodami i wyróżnieniami osobom fizycznym i prawnym zasłużonym dla fundacji. 

</p>
<p className="card-text"></p>

<h6>Rozdział II. Cele i zasady działania Fundacji</h6>
<p className="card-text">§ 8 </p>
<p className="card-text"> 1.  Fundacja została powołana w celach prowadzenia wszechstronnej działalności  
w zakresie : 

budowania postaw odpowiedzialności społecznej pracodawców wobec pracowników  
i społeczności lokalnej, 
<br></br>
2.  działania na rzecz promocji koncepcji CSR (Corporate Social Responsibility) na linii pracodawca pracownik, 
<br></br>
3.  działania na rzecz promocji zasad świadomego i odpowiedzialnego zatrudniania pracowników, 
<br></br>
4.  tworzenie, propagowanie i wspieranie działań na rzecz zrównoważonego rozwoju  

   w rozumieniu celów określonych Agendą na Rzecz Zrównoważonego Rozwoju – 2030 – SDGs (Sustainable Development Goals), w tym: 
   <br></br>
1) eliminacja ubóstwo we wszystkich jego formach, 
<br></br>
2) walka z głodem, zapewnienie bezpieczeństwa żywnościowego i lepszego odżywiania     

     oraz promocja zrównoważonego rolnictwo, 
     <br></br>
3) zapewnienie ludziom bez względu na wiek zdrowego życia oraz promocja dobrobytu, 
<br></br>
4) działania na rzecz dostępu do edukacji wysokiej jakości dla wszystkich oraz promocja  
     uczenie się przez całe życie, 
     <br></br>
5) działanie na rzecz równość płci oraz wzmocnienie pozycji kobiet i dziewcząt, 
<br></br>
6) zapewnienie wszystkim ludziom dostęp do wody i warunków sanitarnych poprzez     
    zrównoważoną gospodarkę zasobami wodnymi, 
    <br></br>
7) działania dla zapewnienia wszystkim dostępu do źródeł stabilnej, zrównoważonej  
     i nowoczesnej energii po przystępnej cenie, 
     <br></br>
8) promowanie stabilnego, zrównoważonego i inkluzywnego wzrost gospodarcze,  

     produktywnego zatrudnienia oraz godnej pracy dla wszystkich ludzi, 
     <br></br>
9) współtworzenie stabilnej infrastruktury, promowanie zrównoważonego  

      uprzemysłowienia oraz wspieranie innowacyjności, 
      <br></br>
10) walka z nierównością w kraju i między krajami, 
<br></br>
11) działania na rzecz poprawy bezpieczeństwa miast i osiedli ludzkich, ich stabilności,   

       zrównoważenia oraz sprzyjanie włączeniu społecznemu, 
       <br></br>
12) promowanie wzorców zrównoważonej konsumpcji i produkcji, 
<br></br>
13) działania w celu przeciwdziałania zmianom klimatu i ich skutkom, 
<br></br>
14) promowania działań chroniących oceany, morza i zasoby morskie, tak by  
       wykorzystywać je w sposób zrównoważony, 
       <br></br>
15) aktywność na rzecz ochrony, przywrócenia oraz promowanie zrównoważonego    

       użytkowania ekosystemów lądowych, zrównoważonego gospodarowanie lasami,  
       zwalczanie pustynnienia, powstrzymywanie i odwracanie proces degradacji gleby  
       oraz powstrzymanie utraty różnorodności biologicznej, 
       <br></br>
16) promocja działań i postaw, na rzecz pokojowego i inkluzywnego społeczeństwa,   
       zmierzających do zapewnienia dostępu do niezależnego wymiaru sprawiedliwości      

       oraz budowanie na wszystkich szczeblach skutecznych i odpowiedzialnych     
       instytucji, sprzyjających włączeniu społecznemu,   
       <br></br>
17) wzmacnianie działań celem wdrażania i ożywiania globalnego partnerstwa na  
      rzecz zrównoważonego rozwoju 
      <br></br>
5.  działania na rzecz inicjatyw rozwoju społecznego,  
<br></br>
6.  promocja aktywności artystycznej,  
<br></br>
7.  działalności na rzecz rozwoju i promocji wiedzy i świadomości w zakresie kultury  
   i sztuki,    </p>
<p className="card-text">§ 9 </p>
<p className="card-text">Fundacja realizuje swoje cele poprzez działania o charakterze niedochodowym w postaci: 
 

 l. organizacji i prowadzenia konkursów, konferencji, seminariów, kursów, szkoleń, paneli    
 
    dyskusyjnych oraz innej działalności edukacyjnej; 
    <br></br>
 2. pisania artykułów oraz prowadzenia działalności wydawniczej; 
 <br></br>
 3. tworzenia i prowadzenia portali internetowych; 
 <br></br>
 4. upowszechnianie wiedzy i idei zasad zrównoważonego rozwoju;  
 <br></br>
 5. promowanie działań w zakresie zrównoważonego rozwoju,   
 <br></br>
 6. podejmowanie szeroko rozumianych postaw krzewiących zasady zrównoważonego  
     rozwoju;  
     <br></br>
 7. działania ukierunkowane na realizację zadań z zakresu obszarów zrównoważonego  
     rozwoju;  
     <br></br>
 8. angażowanie się, w istniejące już formy aktywności na rzecz zasad zrównoważonego  
     rozwoju; 
     <br></br>
 9. przygotowanie koncepcji metodyki wdrożenia zasad zrównoważonego rozwoju;     
 <br></br>
 10.  analizy zachowań pracodawców wobec pracowników; 
 <br></br>
 11.  whistleblowing - nagłaśnianie postaw aspołecznych i nieodpowiedzialnych zachowań  
     pracodawców; 
     <br></br>
 12.  organizowania i promowania imprez i wydarzeń związanych z promowaniem zasady  
     Fair Play (Uczciwa Gra), związanej z zachowaniem pracodawców wobec  
     pracowników; 
     <br></br>
 13.  podejmowania inicjatyw mających na celu ochronę i propagowanie wartości  
 
      zbieżnych z celami Fundacji; 
      <br></br>
 14.  organizowania i promowania imprez i wydarzeń artystycznych;  
 <br></br>
 15. współpracy z innymi organizacjami o zbieżnych celach, zarówno w wymiarze  
       krajowym, jak w wymiarze regionalnym i międzynarodowym. </p>

       <h6>Rozdział III. Majątek i dochody Fundacji  </h6>
       <p className="card-text">§ 10 </p>
       <p className="card-text">Majątek Fundacji stanowi fundusz założycielski w wysokości 2.000 zł (dwa tysiące złotych), wymieniony w akcie ustanowienia Fundacji. Z wymienionego wyżej funduszu założycielskiego Fundacji Fundator przeznacza kwotę 1.000zł (jeden tysiąc złotych) na prowadzenie przez Fundację działalności gospodarczej </p>
        <p className="card-text">§ 11 </p>
        <p className="card-text">1. Dochody Fundacji pochodzą z: 
        <br></br>
1)darowizn, spadków i zapisów, 
<br></br>
2)dotacji i subwencji osób prawnych, grantów, 
<br></br>
3)dochodów ze zbiórek publicznych, 
<br></br>
4)dochodów z majątku Fundacji, 
<br></br>
5)odsetek bankowych, dywidend i zysków z akcji i udziałów przekazywanych Fundacji, 
<br></br>
6)dochodów z działalności gospodarczej. 
<br></br>
2.  Fundacja odpowiada za swoje zobowiązania całym swoim majątkiem. 
<br></br>
3.  Całość dochodów uzyskiwanych przez Fundację jest przeznaczana wyłącznie na działalność statutową. 
<br></br>
4.  Fundacja może uzyskiwać dla realizacji celów statutowych dotacje i środki ze źródeł publicznych, jak również z instytucji Wspólnot Europejskich, Unii Europejskiej bądź organizacji międzynarodowych. 
<br></br>
5.  Dochody z dotacji, darowizn, spadków i zapisów mogą być użyte na realizację wszystkich celów Fundacji, jeżeli ofiarodawcy nie postanowili inaczej. 
<br></br>
6.  W przypadku powołania Fundacji do dziedziczenia, zarząd składa oświadczenie o przyjęciu spadku z dobrodziejstwem inwentarza tylko wówczas, gdy w chwili składania tego oświadczenia jest oczywiste, że stan czynny spadku znacznie przewyższa długi spadkowe. 
          
          </p>

          <h6>Rozdział IV. Działalność gospodarcza Fundacji </h6>

          <p className="card-text">§ 12 </p>
          <p className='card-text'>Działalność gospodarcza Fundacji, zgodnie z Polską Klasyfikacją Działalności (PKD), obejmuje: 

          1) 18.12.Z - pozostałe drukowanie,
          <br></br>
2) 18.13.Z - działalność usługowa związana z przygotowywaniem do druku,
<br></br>
3) 18.14.Z - introligatorstwo i podobne usługi,
<br></br>
4) 18.20.Z - reprodukcja zapisanych nośników informacji,
<br></br>
5) 33.20.Z - instalowanie maszyn przemysłowych, sprzętu i wyposażenia,
<br></br>
6) 46.19.Z - działalność agentów zajmujących się sprzedażą towarów różnego rodzaju,
<br></br>
7) 46.90.Z - sprzedaż hurtowa niewyspecjalizowana,
<br></br>
8) 47.61.Z - sprzedaż detaliczna książek prowadzona w wyspecjalizowanych sklepach,
<br></br>
9) 47.62.Z - sprzedaż detaliczna gazet i artykułów piśmiennych prowadzona w wyspecjalizowanych sklepach,
<br></br>
10) 47.79.Z-sprzedaż detaliczna artykułów używanych prowadzona w wyspecjalizowanych sklepach
<br></br>
11) 47.91 .Z - sprzedaż detaliczna prowadzona przez domy sprzedaży wysyłkowej lub Internet,
<br></br>
12) 53.20.Z — pozostała działalność pocztowa i kurierska,
<br></br>
13) 56.21 .Z — przygotowywanie i dostarczanie żywności dla odbiorców zewnętrznych (catering),
<br></br>
14) 56.29.Z - pozostała usługowa działalność gastronomiczna,
<br></br>
15) 56.30.Z - przygotowywanie i podawanie napojów,
<br></br>
16) 58.11.Z - wydawanie książek,
<br></br>
17) 58.13.Z - wydawanie gazet,
<br></br>
18) 58.14.Z - wydawanie czasopism i pozostałych periodyków,
<br></br>
19) 58.19.Z - pozostała działalność wydawnicza,
<br></br>
20) 58.29.Z - działalność wydawnicza w zakresie pozostałego oprogramowania,
<br></br>
21) 59.1.Z - działalność związana z produkcją filmów, nagrań wideo i programów telewizyjnych,
<br></br>
22) 59.12.Z - działalność postprodukcyjna związana z filmami, nagraniami wideo i programami telewizyjnymi,
<br></br>
23) 59.13.Z - działalność związana z dystrybucją filmów, nagrań wideo i programów telewizyjnych,
<br></br>
24) 59.14.Z - działalność związana z projekcją filmów,
<br></br>
25) 59.20.Z - działalność w zakresie nagrań dźwiękowych i muzycznych,
<br></br>
26) 61. I O.Z - działalność w zakresie telekomunikacji przewodowej,
<br></br>
27) 61.20.Z - działalność w zakresie telekomunikacji bezprzewodowej, z wyłączeniem telekomunikacji satelitarnej,
<br></br>
28) 61.30.Z - działalność w zakresie telekomunikacji satelitarnej,
<br></br>
29) 62.01 .Z - działalność związana z oprogramowaniem,
<br></br>
30) 62.02.Z - działalność związana z doradztwem w zakresie informatyki,
<br></br>
31) 62.09.Z - pozostała działalność usługowa w zakresie technologii informatycznych i komputerowych,
<br></br>
32) 62.03.Z - działalność związana z zarządzaniem urządzeniami informatycznymi,
<br></br>
33) 63.11 .Z - przetwarzanie danych; zarządzanie stronami internetowymi (hosting) i podobna działalność,
<br></br>
34) 63.12.Z - działalność portali internetowych,
<br></br>
35) 63.99.Z - pozostała działalność usługowa w zakresie informacji, gdzie indziej niesklasyfikowana,
<br></br>
36) 68.10.Z - kupno i sprzedaż nieruchomości na własny rachunek,
<br></br>
37) 68.20.Z - wynajem i zarządzanie nieruchomościami własnymi lub dzierżawionymi,
<br></br>
38) 68.31 .Z - pośrednictwo w obrocie nieruchomościami,
<br></br>
39) 68.32.Z - zarządzanie nieruchomościami wykonywane na zlecenie,
<br></br>
40) 70.21 .Z - stosunki międzyludzkie (public relations) i komunikacja,
<br></br>
41) 70.22.Z - pozostałe doradztwo w zakresie prowadzenia działalności gospodarczej i zarządzania,
<br></br>
42) 71.12.Z - działalność w zakresie inżynierii i związane z nią doradztwo techniczne,
<br></br>
43) 72.20.Z - badania naukowe i prace rozwojowe w dziedzinie nauk społecznych i humanistycznych,
<br></br>
44) 73.11 .Z - działalność agencji reklamowych,
<br></br>
45) 73.12.A - pośrednictwo w sprzedaży czasu i miejsca na cele reklamowe w radio i telewizji,
<br></br>
46) 73.12.B - pośrednictwo w sprzedaży miejsca na cele reklamowe w mediach drukowanych,
<br></br>
47) 73.12.C - pośrednictwo w sprzedaży czasu i miejsca na cele reklamowe w mediach elektronicznych (internet),
<br></br>
48) 73.12.D - pośrednictwo w sprzedaży czasu i miejsca na cele reklamowe w pozostałych mediach,
<br></br>
49) 73.20.z - badanie rynku i opinii publicznej,
<br></br>
50) - działalność fotograficzna,
<br></br>
51) 74.30.z - działalność związana z tłumaczeniami,
<br></br>
52) 74.10.z - działalność w zakresie specjalistycznego projektowania,
<br></br>
53) 74.90.z - pozostała działalność profesjonalna, naukowa i techniczna, gdzie indziej niesklasyfikowana,
<br></br>
54) 77. 11.Z - wynajem i dzierżawa samochodów osobowych i furgonetek,
<br></br>
55) 77.12.Z - wynajem i dzierżawa pozostałych pojazdów samochodowych z wyłączeniem motocykli,
<br></br>
56) 77.40.Z - dzierżawa własności intelektualnej i podobnych produktów, z wyłączeniem prac chronionych prawem autorskim,
<br></br>
57) 78.10.Z - działalność związana z wyszukiwaniem miejsc pracy i pozyskiwaniem pracowników,
<br></br>
58) 78.20.Z - działalność agencji pracy tymczasowej,
<br></br>
59) 78.30.Z - pozostała działalność związana z udostępnianiem pracowników,
<br></br>
60) 82.11 .Z - działalność usługowa związana z administracyjną obsługą biura,
<br></br>
61) 82.19.Z - wykonywanie fotokopii, przygotowywanie dokumentów i pozostała specjalistyczna działalność wspomagająca prowadzenie biura,
<br></br>
62) 82.99.Z - pozostała działalność wspomagająca prowadzenie działalności gospodarczej, gdzie indziej niesklasyfikowana,
<br></br>
63) 82.20.Z - działalność centrów telefonicznych (call center),
<br></br>
64) 82.30.Z - działalność związana z organizacją targów, wystaw i kongresów,
<br></br>
65) 85.59. B - pozostałe pozaszkolne formy edukacji, gdzie indziej niesklasyfikowane,
<br></br>
66) 85.60.Z działalność wspomagająca edukację,
<br></br>
67) 94.11.Z - działalność organizacji komercyjnych i pracodawców,
<br></br>
68) 94.12.Z - działalność organizacji profesjonalnych,
<br></br>
69) 94.99.Z - działalność pozostałych organizacji członkowskich, gdzie indziej niesklasyfikowana. </p>

<p className="card-text">§ 13 </p>
<p className="card-text"> Organizacja działalności gospodarczej Fundacji: 

l. Fundacja prowadzi działalność gospodarczą bezpośrednio lub za pośrednictwem posiadanych wyodrębnionych zakładów. 
<br></br>
2. Zakłady są jednostkami organizacyjnymi fundacji i podlegają Zarządowi Fundacji. 3. Decyzje o ustanowieniu zakładu, powołaniu i odwołaniu jego kierownika podejmuje Zarząd Fundacji. 
<br></br>
4. Decyzje o likwidacji zakładu podejmuje Zarząd Fundacji, który powołuje likwidatorów i sprawuje nadzór nad ich działalnością. 
 </p>
 

<h6>Rozdział V. Władze Fundacji  </h6>
<p className="card-text">§ 14 </p>
<p className="card-text">Władzami Fundacji są: Fundator i Zarząd Fundacji, zwany dalej Zarządem.</p>
<p className="card-text">§ 15 </p>
<p className='card-text'>1. Zarząd jest powoływany i odwoływany przez Fundatora. 
<br></br>
2. Zarząd składa się z od jednego do siedmiu członków. 
<br></br>
3. Na czele Zarządu stoi Prezes Zarządu, którego wybierają członkowie Zarządu. 
<br></br>
4. Członkowie Zarządu powoływani są na czas nieokreślony. 
<br></br>
5. Pierwszy Zarząd Fundacji tworzy Mikołaj Jerzy Pindelski (PESEL 74020401095):</p>
<p className="card-text">§ 16 </p>
<p className="card-text">
Fundator może odwołać członka Zarządu w każdym czasie z powodu:

1. działania na szkodę Fundacji,
<br></br>
2. nie uczestniczenia w pracach Zarządu,
<br></br>
3. skazania prawomocnym wyrokiem karnym,
<br></br>
4. śmierci,
<br></br>
5. długotrwałej choroby uniemożliwiającej udział w pracach Zarządu,
<br></br>
6. zrzeczenia się członkostwa.
</p>

<p className="card-text">§ 17 </p>
<p className="card-text">Zarząd w szczególności: 

Zarząd w szczególności:

1. kieruje Fundacją,
<br></br>
2. reprezentuje Fundację na zewnątrz,
<br></br>
3. uchwala wieloletnie i roczne programy działania Fundacji,
<br></br>
4. sprawuje zarząd nad majątkiem Fundacji,
<br></br>
5. przyjmuje subwencje, darowizny, spadki i zapisy,
<br></br>
6. sporządza sprawozdania z działalności Fundacji,
<br></br>
7. organizuje i nadzoruje działalność gospodarczą Fundacji,
<br></br>
8. uchwala regulamin Fundacji,
<br></br>
9. powołuje i odwołuje osoby pełniące stanowiska kierownicze i samodzielne w jednostkach organizacyjnych Fundacji, po uprzednim zasięgnięciu opinii Fundatora,
<br></br>
10. ustala wielkość zatrudnienia, zasady wynagradzania oraz wielkość środków na wynagrodzenia i nagrody dla pracowników Fundacji, zatrudnionych w działalności statutowej, po uprzednim zasięgnięciu opinii Fundatora,
<br></br>
11. podejmuje decyzje w przedmiocie zmiany statutu Fundacji oraz jej likwidacji,
<br></br>
12. podejmuje wszelkie inne decyzje dotyczące Fundacji.  </p>

<p className="card-text">§ 18 </p>
<p className="card-text">
l. Posiedzenia Zarządu odbywają się w miarę potrzeb, nie rzadziej jednak niż raz na kwartał.
<br></br>
2. Posiedzenia Zarządu zwołuje Prezes, przesyłając informację o terminie pocztą elektroniczną, a w przypadku braku takiej możliwości listem poleconym na co najmniej 3 dni przed planowanym spotkaniem.
<br></br>
3. O posiedzeniu muszą zostać poinformowani wszyscy członkowie Zarządu.
<br></br>
4. Zarząd podejmuje decyzje za pomocą uchwał, które podejmowane są zwykłą większością głosów wszystkich obecnych na posiedzeniu członków Zarządu. W przypadku równego rozłożenia głosów decyduje głos Prezesa Zarządu.

</p>
<p className="card-text">§ 19 </p>
<p className="card-text">1. Oświadczenia woli w imieniu Fundacji we wszystkich sprawach, z wyjątkiem majątkowych, składać może każdy członek Zarządu samodzielnie.
<br></br>
2. W sprawach majątkowych wymagane jest współdziałanie dwóch członków Zarządu, w tym każdorazowo Prezesa Zarządu. </p>
<p className="card-text">§ 20 </p>
<p className="card-text"> l. Fundacja może powołać Radę Programową Fundacji stosowną uchwałą Zarządu, podjętą zwykłą większością głosów wszystkich obecnych na posiedzeniu członków Zarządu. W przypadku równego rozłożenia głosów decyduje głos Prezesa Zarządu.
<br></br>
2. Rada Programowa jest organem opiniującym i doradczym Fundacji.
<br></br>
3. Radę Programową tworzą: Fundator, jak również osoby fizyczne i prawne wskazane przez Fundatora, które dokonały znacznego przysporzenia majątkowego na rzecz Fundacji lub w inny sposób istotnie przyczyniły się do realizacji celów Fundacji.
<br></br>
4. Posiedzenia Rady Programowej odbywają się w miarę potrzeb.
<br></br>
5. Posiedzenia Rady Programowej zwołuje Fundator z własnej inicjatywy lub z inicjatywy Zarządu, przesyłając informację o terminie pocztą elektroniczną, a w przypadku braku takiej możliwości listem poleconym na co najmniej 3 dni przed planowanym spotkaniem.
<br></br>
6. O posiedzeniu Rady Programowej muszą zostać poinformowani wszyscy jej członkowie.
<br></br>
7. Rada Programowa podejmuje decyzje za pomocą uchwał, które podejmowane są zwykłą większością głosów wszystkich obecnych na posiedzeniu członków Rady Programowej. W przypadku równego rozłożenia głosów decyduje głos Fundatora.
<br></br>
8. Do kompetencji Rady Programowej należy:

- zajmowanie stanowiska w sprawach przedłożonych przez Zarząd lub podjętych z własnej

- zajmowanie stanowiska co do sposobu rozdziału zgromadzonych przez Fundację środków,

- zajmowanie stanowiska co do kierunku działalności z podmiotami o podobnych celach. </p>

<p className="card-text">§ 21 </p>
<h6> Rozdział VI. Zmiana statutu</h6>
<p className="card-text"> § 21 </p>
<p className="card-text"> Zmian w Statucie Fundacji dokonuje Zarząd Fundacji w drodze uchwały podjętej bezwzględną większością głosów, przy obecności co najmniej połowy członków Zarządu. Zmiany statutu mogą dotyczyć celów, dla których realizacji powołano Fundację, określonych w akcie założycielskim. </p>
           
           <h6>Rozdział VI. Postanowienia końcowe   </h6>
           <p className="card-text">§ 22 </p>
           <p className="card-text">l. Fundacja może się połączyć z inną fundacją dla efektywnego realizowania swoich celów.
           <br></br>
2. Połączenie z inną fundacją nie może nastąpić, jeżeli w jego wyniku cele Fundacji mogłyby ulec istotnej zmianie.
<br></br>
3. W sprawach połączenia z inną fundacją decyzję podejmuje Zarząd w drodze uchwały podjętej bezwzględną większością głosów, przy obecności co najmniej połowy członków Zarządu. </p>
           
       <p className="card-text">§ 23 </p>
       <p className="card-text">l . Fundacja ulega likwidacji w razie osiągnięcia celów, dla których została ustanowiona lub w razie wyczerpania się jej środków finansowych i majątku.
       <br></br>
2. Decyzję o likwidacji podejmuje Zarząd w drodze uchwały podjętej bezwzględną większością głosów, przy obecności co najmniej połowy członków Zarządu.
<br></br>
3. Środki finansowe i majątek pozostały po likwidacji Fundacji mogą zostać przeznaczone mocą uchwały Zarządu na rzecz działających w Rzeczypospolitej Polskiej organizacji o zbliżonych celach. </p>    
           
            
          </div>
        </div>
        
      </main>
    </div>
  );
}

export default App;
