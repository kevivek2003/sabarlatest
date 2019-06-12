$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("adactin.feature");
formatter.feature({
  "line": 1,
  "name": "AdactIn Hotel Application",
  "description": "",
  "id": "adactin-hotel-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "TC-1.Verify user login with valid credentials",
  "description": "",
  "id": "adactin-hotel-application;tc-1.verify-user-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tc_1"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Should launch the hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User should enter valid username  \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should enter valid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click the login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "adactin-hotel-application;tc-1.verify-user-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "adactin-hotel-application;tc-1.verify-user-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "vivekkumar",
        "goatcr7"
      ],
      "line": 10,
      "id": "adactin-hotel-application;tc-1.verify-user-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "TC-1.Verify user login with valid credentials",
  "description": "",
  "id": "adactin-hotel-application;tc-1.verify-user-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tc_1"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Should launch the hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User should enter valid username  \"vivekkumar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should enter valid password \"goatcr7\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Should_launch_the_hotel_reservation_application()"
});
formatter.result({
  "duration": 1997347136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vivekkumar",
      "offset": 35
    }
  ],
  "location": "StepDefinition.user_should_enter_valid_username(String)"
});
formatter.result({
  "duration": 380780198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "goatcr7",
      "offset": 34
    }
  ],
  "location": "StepDefinition.user_should_enter_valid_password(String)"
});
formatter.result({
  "duration": 325859147,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_the_login_button()"
});
formatter.result({
  "duration": 1500576880,
  "status": "passed"
});
});