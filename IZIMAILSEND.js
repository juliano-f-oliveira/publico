 IZIMAILSEND = {

     "linkDoc": "",
     "to": "",
     "from": "",
     "subject": "",
     "templateId": "",
     "dialectId": "pt_BR",
     "param": {},
     "getLinkDocById": function(id) {

        try{

         	if(id == ""){
         		throw {message: "== ParamType error: requeride_documentId =="};
         	}

            var izi = this;
            $.ajax({
                method: "GET",
                url: "/api/public/ecm/document/downloadURL/" + id,
                contentType: "application/json",
                async: false,
                error: function(x, e) {
                 if (x.status == 500) {
                     throw {message: "ERROR 500 - Internal Server Error"};
                 }
                },
                success: function(model) {
                 if (model.content == "ERROR") {

                 	throw {message: "== "+ model.message +" =="};
                 } else {
                 	console.log("== Request_Success_document_ok ==");
                    izi.linkDoc = model.content;
                    return izi;
                 }

                }
             });

        }catch(e){
            console.log(e.message);
        }
     },

     "send": function(anexo = false) {

        try{

         	if(anexo){
         		if(this.linkDoc == ""){
         			throw {message: "== ParamType error: linkDoc_invalid =="};
         		}
         	}
         	if(this.to == ""){
         		throw {message: "== ParamType error: to_invalid =="};
         	}
         	if(this.from == ""){
         		throw {message: "== ParamType error: from_invalid =="};
         	}
         	if(this.subject == ""){
         		throw {message: "== ParamType error: subject_invalid =="};
         	}
         	if(this.templateId == ""){
         		throw {message: "== ParamType error: templateId_invalid =="};
         	}
         	if($.isEmptyObject(this.param)){
         		throw {message: "== ParamType error: param_invalid =="};
         	}

             var dados = {
                 "to": this.to,
                 "from": this.from,
                 "subject": this.subject,
                 "templateId": this.templateId,
                 "dialectId": "pt_BR",
                 "param": this.param
             };

             $.ajax({
                 method: "POST",
                 url: "/api/public/alert/customEmailSender",
                 data: JSON.stringify(dados),
                 contentType: "application/json",
                 async: false,
                 error: function(x, e) {
                     if (x.status == 500) {
                         throw {message: "ERROR 500 - Internal Server Error"};
                     }
                 },
                 success: function(model) {
                    return "OK";
                 }
             });

        }catch(e){
            console.log(e.message);
        }
     },

     "setReceiver": function(email) {
         this.to += email + ";";
         return this;
     },

     "setFrom": function(email) {
         this.from = email;
         return this;
     },

     "setSubject": function(text) {
         this.subject = text;
         return this;
     },

     "setTemplateId": function(text) {
         this.templateId = text;
         return this;
     },

     "setParam": function(obj) {
         $.extend(this.param, obj);
         return this;
     },

 };