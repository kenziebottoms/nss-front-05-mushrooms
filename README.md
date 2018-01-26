# Mushroom Mania

![](https://img.shields.io/badge/data-static_json-lightgrey.svg)
![](https://img.shields.io/badge/template-angular-red.svg)
![](https://img.shields.io/badge/css_framework-bootstrap-5F2C7C.svg)
![](https://img.shields.io/badge/mvp-in_progress-yellow.svg)

## Requirements

For this exercise, you're going to
- [ ] Create a basic application, with a single view.
- [x] Load the JSON data below.
    - [x] Display it in a list.
    - Above the list, provide
        - [ ] one text box
        - [ ] and two radio buttons,
            - [ ] poisonous and
            - [ ] non-poisonous.
- [ ] When the user types **any** text into the text box, the list of mushrooms should be filtered down to any mushrooms whose description contains that text.
- [ ] When the user clicks either of the radio buttons, only the appropriate mushrooms should be displayed.

You will need:

- [ ] An Angular application module.
    - [ ] One controller defined in your application.
        - [ ] The controller will load the JSON with an XHR call using the `$http` function that Angular provides.
    - [ ] One partial bound to the controller.
    - Several directives will be helpful.
        - `ng-repeat`
        - `ng-click`
        - `ng-repeat: filter`
- [ ] Load the JSON below into a new Firebase application rather than reading it from a local file.
- [ ] Put the JSON object into `$scope.mushrooms` and bind that variable in your partial.
