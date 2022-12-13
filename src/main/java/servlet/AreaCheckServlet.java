package servlet;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.Entry;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class AreaCheckServlet  extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
            ServletContext context = getServletContext();
            List<Entry> table = (List<Entry>) context.getAttribute("table");
            if (table == null) table = new ArrayList<>();
            long computationTime = System.nanoTime();
            SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss.SSS");
            String startTime = sdf.format(new Date());
            double x = Double.parseDouble(request.getParameter("X"));
            double y = Double.parseDouble(request.getParameter("Y"));
            double r = Double.parseDouble(request.getParameter("R"));
            long endTime = System.nanoTime();
            Entry entry = new Entry(x, y, r,
                    startTime,
                    (endTime - computationTime) / 1000000 + "." + (endTime - computationTime) % 1000000,
                    inArea(x, y,r));
            table.add(entry);
            context.setAttribute("table", table);
            request.getRequestDispatcher("assets/index.jsp").forward(request, response);
    }
    private boolean inArea(double x, double y, double r){
        if(x >= 0.0){
            if(y >= 0.0){
                return (x <= r) && (y <= r);
            }else{
                return x * x + y * y <= r * r;
            }
        }else{
            if(y <= 0.0){
                return y >= -r/2 - x;
            }else{
                return false;
            }
        }
    }
}
