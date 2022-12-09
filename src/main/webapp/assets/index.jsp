<%@ page import="model.Entry" %>
<%@ page import="java.util.List" %><%--
  Created by IntelliJ IDEA.
  User: Артём
  Date: 11/29/2022
  Time: 12:18 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
    <title>Лабораторная работа №2 Граник Артем, Набиуллин Иван</title>
    <link href="assets/CSS/styles.css" rel="stylesheet" type="text/css">

</head>
<body>
<div class="wrapper">
    <div class="content">
        <header>
            <div>
                Лабораторная работа №2
            </div>
            <div>
                Граник Артем Владимирович Р33212 <br>
                Набиуллин Иван Павлович P33212 <br>
                Вариант №4182
            </div>
        </header>
        <div class="main_content">
            <h1>Попадёт ли точка на плоскости в заданную область?</h1>
            <div class="content_row">
                <div id="visualization_container" class="column">
                    <canvas width="320px" height="320px" id="areas" class="empty"></canvas>
                </div>
                <div class="column">
                    <form method="get" action="checkPoint" onsubmit="return validate()" name="sendForm" class="send_form">
                        <div>
                            <label for="X">Введите значение X: </label>
                            <input type="text" id="X" name="X"
                                   placeholder="Число в диапазоне (-3; 5)">
                            <div id="errorX" class="error"></div>
                        </div>
                        <div>
                            <label for="Y">Введите значение Y: </label>
                            <input type="text" id="Y" name="Y"
                                   placeholder="Число в диапазоне (-3; 3)">
                            <div id="errorY" class="error"></div>
                        </div>
                        <div>
                            <label>Выберите значение R: </label>
                            <div class="button_block">
                                <button type="button" class="r_button" id="r_1.0" onclick="setRadius('1.0')">1.0
                                </button>
                                <button type="button" class="r_button" id="r_1.5" onclick="setRadius('1.5')">1.5
                                </button>
                                <button type="button" class="r_button" id="r_2.0" onclick="setRadius('2.0')">2.0
                                </button>
                                <button type="button" class="r_button" id="r_2.5" onclick="setRadius('2.5')">2.5
                                </button>
                                <button type="button" class="r_button" id="r_3.0" onclick="setRadius('3.0')">3.0
                                </button>
                            </div>
                            <div id="errorR" class="error"></div>
                            <input type="hidden" id="r_select" name="R">
                        </div>
                        <div class="send_button_block">
                            <button type="submit" class="send_button">Отправить</button>
                        </div>
                    </form>
                </div>
                <div class="column result_table">
                    <%
                        ServletContext context = request.getServletContext();
                        List<Entry> table = (List<Entry>) context.getAttribute("table");
                        if (table != null){
                    %>
                    <table>
                        <tr>
                            <th>X</th>
                            <th>Y</th>
                            <th>R</th>
                            <th>Время запуска</th>
                            <th>Время работы</th>
                            <th>Результат</th>
                        </tr>
                        <% for (Entry entry : table){
                        %>
                        <tr>
                            <td class="x_cell"><%= entry.getX() %>
                            </td>
                            <td class="y_cell"><%= entry.getY() %>
                            </td>
                            <td class="r_cell"><%= entry.getR() %>
                            </td>
                            <td><%= entry.getStartTime() %>
                            </td>
                            <td><%= entry.getComputationTime() %>
                            </td>
                            <td><%= entry.getResult()%>
                            </td>
                        </tr>
                        <%}
                        }%>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="assets/js/validation.js"></script>
<script src="assets/js/canvas.js"></script>
</body>
</html>
