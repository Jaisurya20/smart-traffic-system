package com.trafficiq.service;

import org.springframework.stereotype.Service;

@Service
public class TrafficService {

    public int calculate(int density, int waiting) {

        if (density > 70 && waiting > 50) return 60;
        if (density > 50) return 45;
        if (density > 30) return 30;
        return 15;
    }
}