import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import FadeInSection from "./FadeInSection";

function TabPanel(props) {
  const { children, value, index, isMobile, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={isMobile ? `full-width-tabpanel-${index}` : `vertical-tabpanel-${index}`}
      aria-labelledby={isMobile ? `full-width-tab-${index}` : `vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  isMobile: PropTypes.bool
};

function a11yProps(index, isMobile) {
  if (isMobile) {
    return {
      id: "full-width-tab-" + index,
      "aria-controls": "full-width-tabpanel-" + index,
    };
  } else {
    return {
      id: "vertical-tab-" + index,
      "aria-controls": "vertical-tabpanel-" + index,
    };
  }
}

const JobList = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const experienceItems = [
    {
      id: "nbc",
      label: "NBC",
      company: "National Bank of Canada",
      jobTitle: "Software Engineer Intern @ ",
      duration: "MAY 2026 - PRESENT",
      desc: [
        "Incoming Summer 2026",
      ],
    },
    {
      id: "hackconcordia",
      label: "HackConcordia",
      company: "Concordia University",
      jobTitle: "Vice President of Financial Affairs @ ",
      duration: "SEP 2025 - MAY 2026",
      desc: [
        "Managed the club’s budget and financial operations by tracking revenues, reimbursements, direct payments, and event funding, ensuring financial stability through an organized Excel-based system.",
        "Coordinated funding allocation for workshops and for ConUHacks, HackConcordia’s annual flagship event and the largest hackathon in Quebec, optimizing resource distribution for successful events."
      ],
    },
    {
      id: "bdc-dev",
      label: "BDC (Applications)",
      company: "Business Development Bank of Canada",
      jobTitle: "Software Engineer Intern @ ",
      duration: "MAY 2025 - DEC 2025",
      desc: [
        "Contributed to full-stack development across 3 fintech applications using C#, ASP.NET, EF Core, Angular, and TypeScript, supporting over 100,000 users.",
        "Redesigned the UI of a fintech platform, created API endpoints, and implemented two new project types, which improved navigation and reduced user task time by 15%.",
      ],
    },
    {
      id: "bdc-data",
      label: "BDC (Data Analytics)",
      company: "Business Development Bank of Canada",
      jobTitle: "Data Specialist Intern @ ",
      duration: "JAN 2025 - MAY 2025",
      desc: [
        "Analyzed metadata usage patterns in Databricks & Power BI for 500+ internal reports, including report access frequency and user behavior across teams. Contributed to building a Power BI Usage Metrics dashboard.",
        "Built a Power BI–Azure DevOps pipeline to enable version control.",
        "Assessed environment setups and design configurations.",
        "Delivered a Power BI theme that standardized visuals across 1000+ current dashboards, improving consistency and reducing design time by 95%.",
      ],
    },
    {
      id: "obvia",
      label: "Obvia",
      company: "Obvia",
      jobTitle: "Artificial Intelligence Research Fellow @ ",
      duration: "SEP 2024 - AUG 2025",
      desc: [
        "Reviewed 50+ academic articles on ADHD to inform evidence-based well-being strategies.",
        "Led user research and accessibility-focused design sessions with volunteers, and finalized the UI with 95% user approval.",
        "Created DeficitIA, a mental health Android application, writing 2,000+ lines of Kotlin in Android Studio.",
      ],
    },
    {
      id: "mila",
      label: "Mila",
      company: "Mila - Quebec AI Institute",
      jobTitle: "Machine Learning and AI Research Fellow @ ",
      duration: "MAY 2024 - JUN 2024",
      desc: [
        "Studied machine learning and data science techniques such as neural networks, generative AI, and deep learning.",
        "Conducted project coordination, market research, and UX planning with ethical focus.",
        "Developed WhatsIt, an ML-powered application built with a multidisciplinary team.",
        "Collaborated with Google mentors to improve model performance and presented the project to judges, ML researchers, and 200+ attendees.",
      ],
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ 
      flexGrow: 1, 
      bgcolor: "transparent", 
      display: "flex", 
      flexDirection: isMobile ? "column" : "row",
      height: "auto",
      minHeight: 300
    }}>
      <Tabs
        orientation={!isMobile ? "vertical" : "horizontal"}
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        sx={{ 
          borderRight: isMobile ? 0 : 1, 
          borderBottom: isMobile ? 1 : 0,
          borderColor: "var(--lightest-navy)",
          "& .MuiTabs-indicator": {
            backgroundColor: "var(--pearl-aqua)"
          },
          "& .MuiTabs-flexContainer": {
            borderBottom: isMobile ? "1px solid var(--lightest-navy)" : "none"
          }
        }}
      >
        {experienceItems.map((item, i) => (
          <Tab 
            key={item.id} 
            label={item.label} 
            {...a11yProps(i, isMobile)} 
            sx={{
              color: "var(--slate)",
              fontFamily: "NTR",
              fontSize: "14px",
              textAlign: isMobile ? "center" : "left",
              alignItems: isMobile ? "center" : "flex-start",
              textTransform: "none",
              padding: "10px 20px",
              minHeight: "48px",
              minWidth: isMobile ? "120px" : "auto",
              "&.Mui-selected": {
                color: "var(--pearl-aqua)"
              },
              "&:hover": {
                color: "var(--pearl-aqua)",
                backgroundColor: "var(--green-tint)"
              }
            }}
          />
        ))}
      </Tabs>
      <Box sx={{ flexGrow: 1 }}>
        {experienceItems.map((item, i) => (
          <TabPanel key={item.id} value={value} index={i} isMobile={isMobile}>
            <span className="joblist-job-title">
              {item.jobTitle + " "}
            </span>
            <span className="joblist-job-company">{item.company}</span>
            <div className="joblist-duration">
              {item.duration}
            </div>
            <ul className="job-description">
              {item.desc.map(function (descItem, j) {
                return (
                  <FadeInSection key={j} delay={(j + 1) * 100 + "ms"}>
                    <li>{descItem}</li>
                  </FadeInSection>
                );
              })}
            </ul>
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
};

export default JobList;
