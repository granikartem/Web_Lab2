package model;

public class Entry {
    private double x;
    private double y;
    private double r;
    private String startTime;
    private String computationTime;
    private String result;

    public Entry(double x, double y, double r, String startTime, String computationTime, boolean flag) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startTime = startTime;
        this.computationTime = computationTime;
        if(flag){
            this.result = "Попала";
        }else{
            this.result = "Не попала";
        }
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public String getStartTime() {
        return startTime;
    }

    public String getComputationTime() {
        return computationTime;
    }

    public String getResult() {
        return result;
    }
}
