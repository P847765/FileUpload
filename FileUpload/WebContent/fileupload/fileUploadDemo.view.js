sap.ui
		.jsview(
				"fileupload.fileUploadDemo",
				{

					/**
					 * Specifies the Controller belonging to this View. In the
					 * case that it is not implemented, or that "null" is
					 * returned, this View does not have a Controller.
					 * 
					 * @memberOf fileupload.fileUploadDemo
					 */
					getControllerName : function() {
						return "fileupload.fileUploadDemo";
					},

					/**
					 * Is initially called once after the Controller has been
					 * instantiated. It is the place where the UI is
					 * constructed. Since the Controller is given to this
					 * method, its event handlers can be attached right away.
					 * 
					 * @memberOf fileupload.fileUploadDemo
					 */
					createContent : function(oController) {

						var mainPanel = new sap.ui.commons.Panel("mainPanel", {
							text : "Upload your Sheet"
						});
						var ofileUploader = new sap.ui.commons.FileUploader(
								"ofileUploader", {
									uploadUrl : "http://jeetendra.co.in",
									uploadOnChange : false,
									name : "uploadField",
									change : grabFile
								});
						function grabFile(e) {
							console.log("inside Grab: " + e.getSource());
							var file = sap.ui.getCore().byId("ofileUploader").oFileUpload.files[0];
							console.log(file.name);
							var reader = null;
							if (file) {
								console.log('inside file');
								reader = new FileReader();

								reader.onload = function() {
									// console.log("inside onloadFunction");
									console.log(file.name + file.type
											+ file.size);
									alert("hello");
								};
							}
							reader.onload();
						}
						mainPanel.addContent(ofileUploader);
						mainPanel.placeAt("content");
					}
				});
