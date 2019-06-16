$.ajax({
    url: '/json/GinaHong_Resume.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function(data) {
        console.log(data.experience);
        render_img(img, data.coop);
        render_basic(basic, data.info); // Name, contact info
        render_exp(experience, data.experience); // Experience
        render_proj(projects, data.projects); // Projects
        render_tech(techskills, data.techskills); // Technical skills table
        render_edu(education, data.education);
        render_soft(softskills, data.softskills);
    }
});

function render_img(selector, img) {
    var i = "<img src=\"" + img + "\" width=\"90%\" height=\"90%\">"
    console.log(i);

    $(selector).append(i);
}

function render_basic(selector, info) {
    var name = "<h1>" + info.name + "</h1>"
    var ws = "<h3>" + info.website + "</br> </h3>"
    var email = "<h3>" + info.email + "</br> </h3>"
    var phone = "<h3>" + info.phone + "</h3>"
    // var namehtml = $("<ul>").html(content);
    $(selector).append(name);
    $(contact).append(ws + email + phone);
};

function render_exp(selector, workexp) {
    console.log(workexp.length);
    var work = "<h1>" + "Experience" + "</h1>"
    workexp.forEach( function(exp) {
        work += "<h2>" + exp.company + "</h2>"
            + "<h3> / " + exp.position + "</h3>"
            + "<h4>" + exp.fromdate
        if (exp['todate']) {
            work += " - " + exp.todate + "</h4>"
        } else work += " - CURRENT" + "</h4>"
        work += "<p>" + exp.description + "</p>"
    });
    $(selector).append(work);
};

function render_proj(selector, proj) {
    console.log(proj.length);
    var p1 = "<h1>" + "Projects" + "</h1>";

    proj.forEach( function(p) {
        p1 += "<h2>" + p.project_for + "</h2>" +
            "<h3> / " + p.title + "</h3>" +
            "<h4>" + p.fromdate
            if (p['todate']) {
                p1 += " - " + p.todate
            }
        p1 += "</h4>" + "<p>" + p.description + "</p>"
    });
    $(selector).append(p1);
};

function render_edu(selector, edu) {
    console.log(edu.institution);
    var info = "<h1>" + "Education" + "</h1>"
            + "<h2>" + edu.institution + "</h2>"
            + "<h3> / " + edu.degree + "</h3>"
            + "<h4>" + edu.fromdate + " - " + edu.todate + "</h4>" + "<p>"
    edu.achievement.forEach(function(a) {
        info += " - " + a.description + "</br>"
    });
    info += "</p>"

    $(selector).append(info);
};

function render_tech(selector, type) {
    console.log(type.length);
    var header = "<h1>" + "Technical Skills" + "</h1>"
    $(techheader).append(header);

    var skilltype1 = "<thead>"
    var skilltype2 = "<thead>"
    var skilld1 = "<tbody>"
    var skilld2 = "<tbody>"
    type.forEach(function(t) {
        if (t.type=="Technology") {
            skilltype2 += "<th> " + t.type + " </th>"
            skilld2 += "<td>"
            t.list.forEach(function(s) {
                skilld2 += "&nbsp" + s.name + " "
            });
            skilld2 += "</td>"
        } else
        skilltype1 += "<th> " + t.type + " </th>"
        skilld1 += "<td>"
        t.list.forEach(function(s) {
            if (t.type!="Technology") {
                skilld1 += "&nbsp" + s.name + " "
            };
        });
        skilld1 += "</td>"
    });
    skilltype1 += "</thead>" + skilld1 + "</tbody>"
    skilltype2 += "</thead>" + skilld2 + "</tbody>"

    $(table).append(skilltype1);
    $(table).append(skilltype2);
};

function render_soft(selector, skill) {
    var ss = "<h1>" + "Soft sklls" + "</h1>" + "<p>"
    skill.forEach(function(s) {
        ss += " - " + s.desc + "</br>"
    });
    ss += "</p>"

    $(selector).append(ss);
};
