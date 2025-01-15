#  Applicazione Fullstack ecommerce Sprong boot React (primo progetto di fine formazioen)

 Screenshot Home![Screenshot 2025-01-15 022732](https://github.com/user-attachments/assets/9124987a-5f2a-4af1-8a20-940479cb15db)

## Admin Page
![image](https://github.com/user-attachments/assets/36045018-9e25-46da-a623-5d5a3d042ed3)



## Descrizione del Progetto
 Questa applicazione fornisce funzionalità per la gestione degli utenti, delle categorie di prodotti e degli articoli. È stata sviluppata utilizzando tecnologie moderne sia per il backend che per il frontend.

- **Backend**: Sviluppato in Java con Spring Boot, utilizza PostgreSQL come database relazionale e AWS S3 per lo storage dei file.
- **Frontend**: Sviluppato con React, disponibile in una repository separata.
- *L'applicazione è stata progettata come progetto di fine formazione java backend di Digitazon tech school per gestire una piattaforma di e-commerce.
- Il fontend è stato progettato grazie alle conoscenze aquisite all'università
 e alla formazione che ho fatta nella stessa scuola.
 
## Concetti Fondamentali Utilizzati
Questo progetto utilizza diversi concetti fondamentali della programmazione e dello sviluppo software:

1. **Programmazione Orientata agli Oggetti (OOP)**: Il backend è progettato utilizzando principi OOP come incapsulamento, ereditarietà e polimorfismo.
2. **Pattern Architetturali**:
   - **MVC (Model-View-Controller)**: Utilizzato per organizzare il codice in modo modulare e scalabile.
   - **Repository Pattern**: Per separare la logica di accesso ai dati dalla logica aziendale.
3. **Gestione delle Eccezioni**: Personalizzazione delle eccezioni per migliorare la comprensibilità degli errori.
4. **Sicurezza**: Implementata con Spring Security per garantire l'autenticazione e l'autorizzazione degli utenti.
5. **API RESTful**: Il backend espone endpoint chiari per interagire con il sistema.
6. **Cloud Computing**: AWS S3 è utilizzato per gestire il caricamento e la memorizzazione delle immagini dei prodotti, garantendo affidabilità e scalabilità.

## Dettagli sullo Sviluppo

- **Frontend con React**: Sviluppato con Visual Studio Code (VS Code) per sfruttare la sua flessibilità nello sviluppo frontend.
- **Backend con Eclipse**: Sviluppato con Eclipse IDE per acquisire familiarità con strumenti professionali utilizzati in progetti complessi.
- **Abitudine al Lavoro in Team**: La separazione tra frontend e backend consente un approccio modulare e simula un ambiente di lavoro reale in team e per applicazioni complessi.

## Perché ho usato Amazon Web Services (AWS)?
AWS è una soluzione di cloud computing leader nel settore e offre numerosi vantaggi nello sviluppo di applicazioni complessi:

1. **Scalabilità**: Permette di gestire grandi quantità di dati senza problemi di prestazioni.
2. **Affidabilità**: Garantisce la disponibilità dei dati in qualsiasi momento.
3. **Sicurezza**: Offre strumenti avanzati per proteggere i dati caricati (i dati del cliente per esempio).
4. **Integrazione Semplice**: AWS S3 si integra facilmente con il backend, rendendo il caricamento e il recupero delle immagini efficienti.

AWS è particolarmente importante per applicazioni complesse, poiché RIDUCE IL CARICO SUL SERVER PRINCIPALE e migliora l'esperienza dell'utente.

## Endpoint Principali del Backend

### Utenti
1. **Registrazione Utente**
   - **Endpoint**: `POST /auth/register`
   - **Descrizione**: Consente agli utenti di registrarsi.
   - **Parametri Richiesti**: `name`, `email`, `password`, `phoneNumber`.
   - **Autorizzazione**: Nessuna.

  Screenshot Registrazione
![image](https://github.com/user-attachments/assets/d1b13923-784c-436d-a327-8705d7b77c73)




2. **Login Utente**
   - **Endpoint**: `POST /auth/login`
   - **Descrizione**: Consente agli utenti di effettuare il login.
   - **Parametri Richiesti**: `email`, `password`.
   - **Autorizzazione**: Nessuna.

  Screenshot Login
![resgistrazione_frontend](https://github.com/user-attachments/assets/a97ac0d3-2302-4952-883a-1775e64945fe)




### Articoli
6. **Creazione Articolo**
   - **Endpoint**: `POST /product/create`
   - **Descrizione**: Permette agli amministratori di aggiungere un nuovo articolo.
   - **Parametri Richiesti**: `name`, `description`, `price`, `categoryId`.
   - **Autorizzazione**: Per creare un articolo serve l'autorizzazione `ADMIN`; in questo caso genera un messagio di errore perche è stato dimenticato il campo categoria.E uguale per altri endpoind,
   - nel caso in cui non viene rispettato una condizione genera un eccezione (messagio di errore).

   Screenshot Creazione Articolo
   ![create product with error](https://github.com/user-attachments/assets/357f9cf4-42a2-49da-8c06-b17c4fd501f8)





   Quando tutto viene rispettato

   Screenshot Creazione Articolo senza messagio di errore
  ![Screenshot 2025-01-15 024213](https://github.com/user-attachments/assets/4c678784-150e-4a3f-927b-a9035f588694)






8. **Aggiornamento Articolo**
   - **Endpoint**: `PUT /product/update
   - **Descrizione**: Aggiorna un articolo esistente.
   - **Parametri Richiesti**: `name`, `productId`, `price`.
   - **Autorizzazione**: `ADMIN`.

   Screenshot Aggiornamento Articolo
  ![image](https://github.com/user-attachments/assets/e0bc6e68-3c03-443d-9be3-39af6033f5fd)






10. **Lista degli Articoli**
   - **Endpoint**: `GET /product/get-all
   - **Descrizione**: Recupera l'elenco di tutti gli articoli dal cloud di AWS in modo efficienti.
   - **Autorizzazione**: Nessuna. 


    Screenshot Lista Articoli
  ![image](https://github.com/user-attachments/assets/6251a9eb-1ee9-43ad-a77f-6e7ea1f764ee)





   ### Categorie
3. **Creazione Categoria**
   - **Endpoint**: `POST /category/create`
   - **Descrizione**: Permette agli amministratori di creare una nuova categoria.
   - **Parametri Richiesti**: `name`.
   - **Autorizzazione**: `ADMIN`.

   

4. **Aggiornamento Categoria**
   - **Endpoint**: `PUT /category/update/{categoryId}`
   - **Descrizione**: Permette agli amministratori di aggiornare una categoria esistente.
   - **Parametri Richiesti**: `name`.
   - **Autorizzazione**: `ADMIN`.

   Screenshot aggiorna Categoria
  ![image](https://github.com/user-attachments/assets/f8c144fc-de52-4974-924d-22839da42a31)


   

5. **Lista delle Categorie**
   - **Endpoint**: `GET /category/get-all`
   - **Descrizione**: Recupera l'elenco di tutte le categorie.
   - **Autorizzazione**: Nessuna.
     
   Screenshot Lista Categorie
![image](https://github.com/user-attachments/assets/c1f1c5f3-3abc-4e37-87df-b6cc49dc7f17)



### Configurazione di AWS S3
L'integrazione con AWS S3 è configurata nel backend per gestire il caricamento delle immagini dei prodotti. Ogni file è memorizzato in un bucket specifico, garantendo un accesso rapido e sicuro.

## Conclusione
Questo progetto rappresenta un esempio completo di applicazione fullstack moderna, con un'architettura ben progettata e una forte enfasi sulla scalabilità e la sicurezza. 
 Esplorare entrambe le repository per comprendere meglio come frontend e backend interagiscono per fornire una soluzione efficace.
