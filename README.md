# bw-april-SG2--partyPlanner-BE


| Authentication Endpoints                                                    |  Inputs and responses                   | 
|-----------------------------------------------------------------------------|:---------------------------------------:|
|https://party-planner-build-week.herokuapp.com/api/register                  |                                         | 
| POST                                                                        | username, password                      |     
|https://party-planner-build-week.herokuapp.com/api/login .                   |                                         | 
| POST                                                                        | username, password                      |  
| Response                                                                    | id, username, password                  |   



| Party Endpoints                                                             |  Inputs and responses                   | 
|-----------------------------------------------------------------------------|:---------------------------------------:|
|https://party-planner-build-week.herokuapp.com/api/parties                   |                                         | 
| GET                                                                         |                                         |     
| Response                                                                    | id, theme, date, budget, guestCount     | 
| POST                                                                        |                                         | 
| required Input                                                              | theme, date, budget, guestCount         | 
|https://party-planner-build-week.herokuapp.com/api/parties/:id               |                                         | 
| GET                                                                         |                                         |  
| Response                                                                    | id, theme, date, budgetm guestCount,    |
|                                                                             | items, todos                            |  


| ShoppingList Endpoints                                                      |  Inputs and responses                   | 
|-----------------------------------------------------------------------------|:---------------------------------------:|
|https://party-planner-build-week.herokuapp.com/api/items/:id                 |                                         | 
| POST                                                                        |                                         |     
| required input                                                              | party_id, item                          | 
| PUT                                                                         |                                         | 
| required Input                                                              | item                                    | 
| DELETE                                                                      |                                         | 


| To-do List Endpoints                                                        |  Inputs and responses                   | 
|-----------------------------------------------------------------------------|:---------------------------------------:|
|https://party-planner-build-week.herokuapp.com/api/todos/:id                 |                                         | 
| POST                                                                        |                                         |     
| required input                                                              | party_id, todo                          | 
| PUT                                                                         |                                         | 
| required Input                                                              | todo                                    | 
| DELETE                                                                      |                                         | 

