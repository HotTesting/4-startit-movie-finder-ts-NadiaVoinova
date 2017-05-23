import { browser, element, By, $ } from 'protractor'

describe('Test',  ()=>  {
  const URL = 'https://movies-finder.firebaseapp.com/'
    it('Opening site', ()=> {
        browser.get(URL)
        browser.sleep(5000)
        expect(browser.getCurrentUrl()).toEqual(URL);
       
    })

    it('Checking title', ()=> {
        browser.get(URL)
        browser.sleep(5000)
        expect(browser.getTitle()).toEqual('Movies Finder');
        
    })

     it('Searching elements1', function () {
        let locator = By.css('input.form-control')
        let searchField = element(locator)
        browser.get(URL)
        browser.sleep(5000)

        expect(searchField.isPresent()).toBeTruthy()
        expect(searchField.isDisplayed()).toBeTruthy()
       expect(searchField.getAttribute('placeholder')).toEqual('Search for movies...')
    })

     it('Searching elements2', function () {
        let locator = By.css('span.input-group-btn')
        let searchField = element(locator)
        browser.get(URL)
        browser.sleep(5000)

        expect(searchField.isPresent()).toBeTruthy()
        expect(searchField.isDisplayed()).toBeTruthy()
      })
      
//Почему тут чтоб добраться до элемента нужно прописывать полный путь??)
      it('Searching elements3', function () {
        let locator = By.css('span.input-group-btn button.btn.btn-primary')
        let searchButton = element(locator)
        browser.get(URL)
        browser.sleep(5000)

        expect(searchButton.isPresent()).toBeTruthy()
        expect(searchButton.isDisplayed()).toBeTruthy()
        expect(searchButton.getAttribute('type')).toEqual('button')
  })


        it('Input keys', function () {
        let locator = By.css('input.form-control')
        let searchField = element(locator)
        browser.get(URL)
        browser.sleep(5000) 

        let searchRequest = 'Love'

        searchField.sendKeys(searchRequest)
        browser.sleep(5000)
        element(By.css('span.input-group-btn button.btn.btn-primary')).click()
        browser.sleep(5000)

        let movieCard =By.css('movie-card')
       //let title = By.css('movieCard.h4 a').getText()
       // expect(title).toContain(searchRequest)
    })
       

    
    })



//describe('Test', ()=> {
    //it('First Test', ()=> {
      // const URL = 'https://movies-finder.firebaseapp.com/'
       // browser.get('URL')
      //  browser.getTitle
      //  browser.sleep(10000)
       // expect(browser.getCurrentUrl()).toBe('URL')
        //expect(browser.getTitle()).toEquel('Movies Finder')
       // expect(true).toBe(true)
 //it('Second Test', ()=> {
       //const URL = 'https://movies-finder.firebaseapp.com/'
       // browser.get(URL)
       //browser.sleep(10000)
        
     // let searchField = element(By.css('input.form-control'))
      //searchField.isDisplayed()
       //expect(searchField.isPresent()).toBeTruthy()
      // expect(searchField.isDisplayed()).toBeTruthy()

      // expect(sea.getAttribute('placeholder')).toEqual('Search for movies')
          
       //searchField.sendKeys('HELLO WORLD')
       //element(By.css('movies p button.btn-primary')).click()
      // expect(sea.getKeys ('placeholder')).toEqual('Search for movies')
      // browser.sleep(10000)
      
 
