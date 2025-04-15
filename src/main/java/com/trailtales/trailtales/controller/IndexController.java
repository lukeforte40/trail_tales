package com.trailtales.trailtales.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class IndexController {	

	@RequestMapping("/*")
	public ModelAndView home() {
		return new ModelAndView("index");
	}
}