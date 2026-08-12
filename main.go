package main

import (
	"encoding/json"
	"html/template"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"
)

type PageData struct {
	Name        string
	Title       string
	Subtitle    string
	Description string
	Location    string
	Email       string
	Phone       string
	Year        int
	Skills      []Skill
	Projects    []Project
}

type Skill struct {
	Name  string
	Level int
}

type Project struct {
	Title       string
	Category    string
	Description string
	URL         string
	Image       string
}

type ContactMessage struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

func main() {
	tmpl := template.Must(template.ParseFiles(filepath.Join("templates", "index.html")))

	mux := http.NewServeMux()
	mux.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	mux.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("assets"))))

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/" {
			http.NotFound(w, r)
			return
		}

		data := PageData{
			Name:        "Bùi Thị Lệ Thắm",
			Title:       "Developer • Web Developer • Problem Solver",
			Subtitle:    "Tôi xây dựng các sản phẩm web hiện đại, rõ ràng, tốc độ nhanh và thân thiện với người dùng.",
			Description: "Tôi là một lập trình viên trẻ với niềm đam mê phát triển web, xây dựng trải nghiệm người dùng tốt và tạo ra những sản phẩm có giá trị thực tế.",
			Location:    "Đà Nẵng, Việt Nam",
			Email:       "lethamdaklak2005@gmail.com",
			Phone:       "+84 398 389 726",
			Year:        time.Now().Year(),
			Skills: []Skill{
				{Name: "Go", Level: 85},
				{Name: "HTML / CSS", Level: 92},
				{Name: "JavaScript", Level: 83},
				{Name: "PHP", Level: 80},
				{Name: "MySQL", Level: 76},
				{Name: "Git / GitHub", Level: 88},
			},
			Projects: []Project{
				{
					Title:       "Shop Fashion",
					Category:    "Laravel",
					Description: "Website thương mại điện tử với giao diện thân thiện, trải nghiệm mua hàng tốt và dễ sử dụng.",
					URL:         "https://github.com/BuiThiLeTham/ShopFashion",
					Image:       "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
				},
				{
					Title:       "Chat Application",
					Category:    "Java",
					Description: "Ứng dụng nhắn tin thời gian thực, tối ưu cho giao tiếp và tương tác nhanh chóng.",
					URL:         "https://github.com/havy25/ProjectJava.git",
					Image:       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
				},
				{
					Title:       "Portfolio API",
					Category:    "Go",
					Description: "Backend viết bằng Go phục vụ portfolio, contact form và cấu trúc project sạch, dễ mở rộng.",
					URL:         "#contact",
					Image:       "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
				},
			},
		}

		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		if err := tmpl.Execute(w, data); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})

	mux.HandleFunc("/api/contact", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		if err := r.ParseMultipartForm(32 << 20); err != nil {
			http.Error(w, "Không thể đọc form", http.StatusBadRequest)
			return
		}

		msg := ContactMessage{
			Name:    strings.TrimSpace(r.FormValue("name")),
			Email:   strings.TrimSpace(r.FormValue("email")),
			Message: strings.TrimSpace(r.FormValue("message")),
		}

		if msg.Name == "" || msg.Email == "" || msg.Message == "" {
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusBadRequest)
			json.NewEncoder(w).Encode(map[string]string{"status": "error", "message": "Vui lòng điền đầy đủ thông tin."})
			return
		}

		log.Printf("New contact from %s <%s>: %s", msg.Name, msg.Email, msg.Message)
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]string{"status": "success", "message": "Tin nhắn của bạn đã được gửi thành công!"})
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8081"
	}

	addr := ":" + port
	log.Printf("Server started at http://localhost:%s", port)
	log.Fatal(http.ListenAndServe(addr, mux))
}
