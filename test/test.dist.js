"use strict";function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}else{return Array.from(arr)}}function add(className){return function(elm){elm.classList.add(className);return elm}}function remove(className){return function(elm){elm.classList.remove(className);return elm}}function toggle(className){return function(elm){elm.classList.toggle(className);return elm}}var classActs={add:add,remove:remove,toggle:toggle};document.addEventListener("DOMContentLoaded",function(e){[].concat(_toConsumableArray(document.querySelectorAll(".has-class"))).map(classActs.remove("has-class")).map(classActs.add("new-class")).map(function(elm){return elm.addEventListener("click",function(){classActs.toggle("was-clicked")(elm)})})});