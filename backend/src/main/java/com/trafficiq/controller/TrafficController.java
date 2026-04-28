package com.trafficiq.controller;

import com.trafficiq.model.TrafficData;
import com.trafficiq.service.TrafficService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/traffic")
public class TrafficController {

    @Autowired
    private TrafficService service;

    @PostMapping
    public Response getTime(@RequestBody TrafficData data) {
        int result = service.calculate(data.getDensity(), data.getWaitingTime());
        return new Response(result);
    }

    class Response {
        public int greenTime;
        public Response(int greenTime) {
            this.greenTime = greenTime;
        }
    }
}