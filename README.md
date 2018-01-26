# Mushroom Mania

![](https://img.shields.io/badge/data-static_json-lightgrey.svg)
![](https://img.shields.io/badge/template-angular-red.svg)
![](https://img.shields.io/badge/css_framework-bootstrap-5F2C7C.svg)
![](https://img.shields.io/badge/mvp-working-green.svg)
![](https://img.shields.io/badge/bonus-none-lightgrey.svg)

## Part One Requirements

For this exercise, you're going to
- [x] Create a basic application, with a single view.
- [x] Load the JSON data below.
    - [x] Display it in a list.
    - Above the list, provide
        - [x] one text box
        - [x] and two radio buttons,
            - [x] poisonous and
            - [x] non-poisonous.
- [x] When the user types **any** text into the text box, the list of mushrooms should be filtered down to any mushrooms whose description contains that text.
- [x] When the user clicks either of the radio buttons, only the appropriate mushrooms should be displayed.

You will need:

- [x] An Angular application module.
    - [x] One controller defined in your application.
        - [x] The controller will load the JSON with an XHR call using the `$http` function that Angular provides.
    - [x] One partial bound to the controller.
    - Several directives will be helpful.
        - `ng-repeat`
        - `ng-click`
        - `ng-repeat: filter`
- [ ] Load the JSON below into a new Firebase application rather than reading it from a local file.
- [x] Put the JSON object into `$scope.mushrooms` and bind that varisable in your partial.

## Part Two Requirements: Factory

You are going to modify your Mushroom Mania application to use a factory to retrieve the mushroom data instead of retrieving it directly in your controller.

- [x] Create a new factory for your Angular application. Make sure your factory returns something.
- [x] Inject the factory dependency into your controller.
- [x] Invoke the appropriate function that your factory exposes to get the mushroom data.
- [x] When the method is successful, take the results and put them into `$scope.mushrooms` variable in your controller that is bound to the partial.