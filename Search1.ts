import { browser, element, By, $ } from 'protractor'
describe('Searching by input keys',  ()=>  {
  const URL = 'https://movies-finder.firebaseapp.com/'
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
        let movieCards = element.all(By.css('movie-card'))

       
          movieCards.each(function (elem, indx) {
           expect(elem.getText()).toContain(searchRequest)
          })

       // let movieCard =By.css('movie-card')
     // let title = By.css('movieCard.h4 a').getText()
          //expect(title).toContain(searchRequest)
 
        })
  
        it('Search2', ()=> {
        
          browser.get(URL)
        browser.sleep(5000)
        //search field is ElementFinder
      let searchField = $("input[name='searchStr']")
      let searchRequest = 'Назад в будущее'
      searchField.sendKeys(searchRequest)
      element(By.buttonText('Go!')).click()
      browser.sleep(5000)
      let movieCard =$('movie-card')
      let title = movieCard.$('ng-reflect-model').getText()
        expect(title).toContain(searchRequest,('First serch result should contain Serch string'))


         })

  } )