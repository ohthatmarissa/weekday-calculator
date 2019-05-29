
import { getUserDate } from './weekday.js';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
  $("#weekday-form").submit(function(event) {
    event.preventDefault();
    let userDate = $("#date").val();
    let date = new Date(userDate);
    let output = getUserDate(date);
    $('p').text(output);
  });
});