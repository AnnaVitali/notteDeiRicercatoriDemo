# Demo per la notte europea dei ricercatori

Repository contenente una demo realizzata per il progetto: insieme nel Metaverso, da presentare alla notte europea dei ricercatori.

## Istruzioni per eseguire gli esempi

Una volta aperto il progetto su un proprio IDE per poter eseguire il Server fino ad ora realizzato, occorre:

1. Inizializzare i pacchetti npm
   ```bash
   npm init
   ```
2. Installare Express
    ```bash
   npm install express
   ```
3. Installare `openssl` ([installazione](https://help.qlik.com/it-IT/nprinting/May2023/Content/NPrinting/DeployingQVNprinting/Installing-SSL.htm)) per realizzare il certificato da associare alla pagina web, in quanto WebXR è in grado di funzionare solo tramite siti https
4. Creare il certificato
   ```bash
   openssl genrsa -out private_key.pem
   openssl req -new -key private_key.pem -out csr.pem
   openssl x509 -req -days 9999 -in csr.pem -signkey private_key.pem -out cert.pem
   ```
5. Modificare indirizzo ip e numero della porta di ascolto, relativi al Server, all'interno del file `app.js`
6. Lanciare il comando di avvio e collegarsi a uno dei link indicati
   ```bash
   node app.js
   ```
   
## Note importanti per l'esecuzione

Quando ci si collega a un esempio il link ottenuto è univoco e identificato da una chiave creata randomicamente da Croquet,
ogni volta che ci si collega ad esempio a `https://ip_address:port/exampleAnimation`, automaticamente viene associata 
una chiave di sicurezza al sito, portando l'_url_ ad assumere la seguente forma 
`https://ip_address:port/exampleAnimation?q=security_key`. In questo modo 
è possibile far partire una nuova sessione ogni volta ci si colleghi al sito, riportando la scena alle sue condizioni 
iniziali, altrimenti si partirebbe sempre dallo stato in cui gli ultimi utenti l'hanno lasciata.

Per connettersi a una stessa sessione basta collegarsi alla pagina indicata con il nome di _qrCode_, al link: 
`https://ip_address:port/qrCode`, una volta connessi a questa pagina basta copiare l'_url_, precedentemente creato per 
l'esempio, all'interno dell'apposita casella di testo e premere il tasto INVIO, a questo punto verrà generato un 
apposito qrCode che da la possibilità a chiunque lo scansioni di connettersi alla medesima sessione creata.

Infine, con una stessa `apiKey` e `appId` (forniti dal portale di Croquet: https://croquet.io/account/) è possibile solo lanciare un esempio per volta, non più esempi diversi contetmporaneamente,
avendo a disposizione più `apiKey` e `appId` è possibile lanciare più esempi per volta.

## Note importanti per l'utilizzo

Quando ci si collega a un esempio potrebbe volerci qualche secondo per caricare gli ologrammi importati, quindi, all'inizio
la pagina può risultare bianca, ma dopo l'attesa di qualche istante, a seconda della complessità dei modelli importati, sarà
possibile visualizzare correettamente la scena con i suoi elementi.

Infine, durante l'utilizzo, quando si manipola un ologramma è possibile notare che lo spazio dell'utente modellato dall'applicazione 
è di forma sferica, questo e dovuto alle specifiche tecnologie utilizzate per il framework in particolare _Babylon.js_, di conseguenza, gli ologrammi che vengono
mossi seguiranno le dimensioni e l'orientamento di questo spazio.