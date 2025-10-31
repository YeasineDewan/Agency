import { Document, Packer, Paragraph, TextRun, Table, TableCell, TableRow, HeadingLevel, AlignmentType, WidthType } from 'docx';
import { saveAs } from 'file-saver';

export const generateServiceReport = async (serviceData, serviceType) => {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Header
        new Paragraph({
          text: `${serviceType} Performance Report`,
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.CENTER,
        }),
        new Paragraph({
          text: `Generated on ${new Date().toLocaleDateString()}`,
          alignment: AlignmentType.CENTER,
        }),
        new Paragraph({
          text: "",
        }),

        // Executive Summary
        new Paragraph({
          text: "Executive Summary",
          heading: HeadingLevel.HEADING_1,
        }),
        new Paragraph({
          children: [
            new TextRun(`This report provides a comprehensive overview of your ${serviceType} performance, including key metrics, KPIs, and recommendations for optimization.`),
          ],
        }),
        new Paragraph({
          text: "",
        }),

        // Key Metrics Table
        new Paragraph({
          text: "Key Performance Metrics",
          heading: HeadingLevel.HEADING_2,
        }),
        new Table({
          width: {
            size: 100,
            type: WidthType.PERCENTAGE,
          },
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  children: [new Paragraph("Metric")],
                  width: { size: 30, type: WidthType.PERCENTAGE },
                }),
                new TableCell({
                  children: [new Paragraph("Current Value")],
                  width: { size: 25, type: WidthType.PERCENTAGE },
                }),
                new TableCell({
                  children: [new Paragraph("Target")],
                  width: { size: 25, type: WidthType.PERCENTAGE },
                }),
                new TableCell({
                  children: [new Paragraph("Status")],
                  width: { size: 20, type: WidthType.PERCENTAGE },
                }),
              ],
            }),
            ...serviceData.metrics.map(metric =>
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph(metric.name)],
                  }),
                  new TableCell({
                    children: [new Paragraph(metric.current.toString())],
                  }),
                  new TableCell({
                    children: [new Paragraph(metric.target.toString())],
                  }),
                  new TableCell({
                    children: [new Paragraph({
                      text: metric.status,
                      color: metric.status === 'On Track' ? '008000' : metric.status === 'At Risk' ? 'FFA500' : 'FF0000',
                    })],
                  }),
                ],
              })
            ),
          ],
        }),

        new Paragraph({
          text: "",
        }),

        // Performance Analysis
        new Paragraph({
          text: "Performance Analysis",
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph({
          children: [
            new TextRun(serviceData.analysis),
          ],
        }),

        new Paragraph({
          text: "",
        }),

        // Recommendations
        new Paragraph({
          text: "Recommendations",
          heading: HeadingLevel.HEADING_2,
        }),
        ...serviceData.recommendations.map(rec =>
          new Paragraph({
            children: [
              new TextRun("• "),
              new TextRun(rec),
            ],
          })
        ),

        new Paragraph({
          text: "",
        }),

        // Project Timeline
        new Paragraph({
          text: "Project Timeline",
          heading: HeadingLevel.HEADING_2,
        }),
        new Table({
          width: {
            size: 100,
            type: WidthType.PERCENTAGE,
          },
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  children: [new Paragraph("Milestone")],
                  width: { size: 40, type: WidthType.PERCENTAGE },
                }),
                new TableCell({
                  children: [new Paragraph("Due Date")],
                  width: { size: 30, type: WidthType.PERCENTAGE },
                }),
                new TableCell({
                  children: [new Paragraph("Status")],
                  width: { size: 30, type: WidthType.PERCENTAGE },
                }),
              ],
            }),
            ...serviceData.timeline.map(item =>
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph(item.milestone)],
                  }),
                  new TableCell({
                    children: [new Paragraph(item.dueDate)],
                  }),
                  new TableCell({
                    children: [new Paragraph({
                      text: item.status,
                      color: item.status === 'Completed' ? '008000' : item.status === 'In Progress' ? '0000FF' : 'FFA500',
                    })],
                  }),
                ],
              })
            ),
          ],
        }),

        new Paragraph({
          text: "",
        }),

        // Footer
        new Paragraph({
          text: "This report was generated automatically by the Client Dashboard System.",
          alignment: AlignmentType.CENTER,
        }),
        new Paragraph({
          text: "For questions or concerns, please contact your account manager.",
          alignment: AlignmentType.CENTER,
        }),
      ],
    }],
  });

  const buffer = await Packer.toBuffer(doc);
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  });

  saveAs(blob, `${serviceType}_Report_${new Date().toISOString().split('T')[0]}.docx`);
};

export const generateComprehensiveReport = async (allServicesData) => {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Header
        new Paragraph({
          text: "Comprehensive Services Performance Report",
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.CENTER,
        }),
        new Paragraph({
          text: `Generated on ${new Date().toLocaleDateString()}`,
          alignment: AlignmentType.CENTER,
        }),
        new Paragraph({
          text: "",
        }),

        // Overview
        new Paragraph({
          text: "Portfolio Overview",
          heading: HeadingLevel.HEADING_1,
        }),
        new Paragraph({
          children: [
            new TextRun("This comprehensive report covers all active services and provides insights into overall portfolio performance."),
          ],
        }),
        new Paragraph({
          text: "",
        }),

        // Services Summary Table
        new Paragraph({
          text: "Services Summary",
          heading: HeadingLevel.HEADING_2,
        }),
        new Table({
          width: {
            size: 100,
            type: WidthType.PERCENTAGE,
          },
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  children: [new Paragraph("Service")],
                  width: { size: 25, type: WidthType.PERCENTAGE },
                }),
                new TableCell({
                  children: [new Paragraph("Status")],
                  width: { size: 20, type: WidthType.PERCENTAGE },
                }),
                new TableCell({
                  children: [new Paragraph("ROI")],
                  width: { size: 15, type: WidthType.PERCENTAGE },
                }),
                new TableCell({
                  children: [new Paragraph("Budget Used")],
                  width: { size: 20, type: WidthType.PERCENTAGE },
                }),
                new TableCell({
                  children: [new Paragraph("Next Milestone")],
                  width: { size: 20, type: WidthType.PERCENTAGE },
                }),
              ],
            }),
            ...allServicesData.map(service =>
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph(service.name)],
                  }),
                  new TableCell({
                    children: [new Paragraph({
                      text: service.status,
                      color: service.status === 'Active' ? '008000' : service.status === 'Completed' ? '0000FF' : 'FFA500',
                    })],
                  }),
                  new TableCell({
                    children: [new Paragraph(`${service.roi}%`)],
                  }),
                  new TableCell({
                    children: [new Paragraph(`$${service.budgetUsed.toLocaleString()}`)],
                  }),
                  new TableCell({
                    children: [new Paragraph(service.nextMilestone)],
                  }),
                ],
              })
            ),
          ],
        }),

        new Paragraph({
          text: "",
        }),

        // Financial Summary
        new Paragraph({
          text: "Financial Summary",
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph({
          children: [
            new TextRun(`Total Portfolio Value: $${allServicesData.reduce((sum, s) => sum + s.budgetUsed, 0).toLocaleString()}`),
            new TextRun({ text: "\n", break: 1 }),
            new TextRun(`Average ROI: ${(allServicesData.reduce((sum, s) => sum + s.roi, 0) / allServicesData.length).toFixed(1)}%`),
            new TextRun({ text: "\n", break: 1 }),
            new TextRun(`Active Projects: ${allServicesData.filter(s => s.status === 'Active').length}`),
          ],
        }),

        new Paragraph({
          text: "",
        }),

        // Strategic Recommendations
        new Paragraph({
          text: "Strategic Recommendations",
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph({
          children: [
            new TextRun("Based on current performance data, here are key recommendations for portfolio optimization:"),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun("• Focus on high-ROI services for maximum impact"),
            new TextRun({ text: "\n", break: 1 }),
            new TextRun("• Consider reallocating budget from underperforming services"),
            new TextRun({ text: "\n", break: 1 }),
            new TextRun("• Invest in services showing strong growth potential"),
            new TextRun({ text: "\n", break: 1 }),
            new TextRun("• Regular performance reviews to ensure alignment with business goals"),
          ],
        }),

        new Paragraph({
          text: "",
        }),

        // Footer
        new Paragraph({
          text: "This comprehensive report was generated automatically by the Client Dashboard System.",
          alignment: AlignmentType.CENTER,
        }),
        new Paragraph({
          text: "For detailed service-specific reports, please refer to individual service sections.",
          alignment: AlignmentType.CENTER,
        }),
      ],
    }],
  });

  const buffer = await Packer.toBuffer(doc);
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  });

  saveAs(blob, `Comprehensive_Report_${new Date().toISOString().split('T')[0]}.docx`);
};
